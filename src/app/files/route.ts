import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import path from "path";
import fs from "fs";
import { verifyToken } from "@/lib/jwt";
import {
  validateUpload,
  isPathUnderRoot,
  type UploadValidationError,
} from "@/lib/file-security";

const ROOT_DIR =
  process.env.DATA_PATH ??
  (process.env.NODE_ENV === "production" ? "/data" : "./data");
const UPLOADS_DIR = path.resolve(ROOT_DIR, "uploads");

export const POST = async (req: NextRequest) => {
  const token = req.cookies.get("session");
  if (!token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const user = await verifyToken(token.value);
  if (!user) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as Blob) || null;
  const rawName = (body.file as File)?.name ?? "";
  const mimeType = (body.file as File)?.type ?? null;
  const clientId = typeof body.clientId === "string" ? body.clientId.trim() : null;

  if (!clientId) {
    return NextResponse.json(
      { success: false, message: "Missing clientId" },
      { status: 400 }
    );
  }

  const client = await prisma.client.findUnique({ where: { id: clientId } });
  if (!client) {
    return NextResponse.json(
      { success: false, message: "Client not found" },
      { status: 404 }
    );
  }

  const validation = validateUpload(file, rawName);
  if (!validation.ok) {
    const err = validation as UploadValidationError;
    return NextResponse.json(
      { success: false, message: err.message },
      { status: err.status }
    );
  }

  const { safeExtension, displayName } = validation;
  const size = file?.size ?? 0;

  const newFile = await prisma.file.create({
    data: {
      name: displayName,
      path: path.resolve(UPLOADS_DIR, "pending"),
      size,
      type: mimeType ?? "application/octet-stream",
      uploadedById: user.id,
      clientId,
    },
  });

  const diskFileName = `${newFile.id}.${safeExtension}`;
  const absolutePath = path.resolve(UPLOADS_DIR, diskFileName);

  if (!isPathUnderRoot(absolutePath, UPLOADS_DIR)) {
    await prisma.file.delete({ where: { id: newFile.id } });
    return NextResponse.json(
      { success: false, message: "Invalid file path" },
      { status: 400 }
    );
  }

  try {
    if (!fs.existsSync(ROOT_DIR)) {
      fs.mkdirSync(ROOT_DIR, { recursive: true });
    }
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
    const buffer = Buffer.from(await (file as Blob).arrayBuffer());
    fs.writeFileSync(absolutePath, buffer);
  } catch {
    await prisma.file.delete({ where: { id: newFile.id } });
    return NextResponse.json(
      { success: false, message: "Failed to save file" },
      { status: 500 }
    );
  }

  await prisma.file.update({
    where: { id: newFile.id },
    data: { path: absolutePath },
  });

  return NextResponse.json({
    success: true,
    name: displayName,
  });
};

