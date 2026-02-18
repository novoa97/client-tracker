import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import fs from "fs";
import path from "path";
import {
  isPathUnderRoot,
  sanitizeContentDispositionFilename,
} from "@/lib/file-security";

const ROOT_DIR =
  process.env.DATA_PATH ??
  (process.env.NODE_ENV === "production" ? "/data" : "./data");

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
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

  const { id: fileId } = await params;
  const isDownload = req.nextUrl.searchParams.get("download") === "true";

  const file = await prisma.file.findUnique({
    where: { id: fileId },
  });

  if (!file) {
    return NextResponse.json(
      { success: false, message: "File not found" },
      { status: 404 }
    );
  }

  const resolvedPath = path.resolve(file.path);
  if (!isPathUnderRoot(resolvedPath, ROOT_DIR)) {
    return NextResponse.json(
      { success: false, message: "File not found" },
      { status: 404 }
    );
  }

  if (!fs.existsSync(resolvedPath)) {
    return NextResponse.json(
      { success: false, message: "File not found" },
      { status: 404 }
    );
  }

  const fileContent = fs.readFileSync(resolvedPath);
  const safeFilename = sanitizeContentDispositionFilename(file.name);

  if (isDownload) {
    return new NextResponse(Buffer.from(fileContent), {
      headers: {
        "Content-Type": file.type || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${safeFilename}"`,
      },
    });
  }
  return new NextResponse(Buffer.from(fileContent), {
    headers: {
      "Content-Type": file.type || "application/octet-stream",
    },
  });
};


export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const token = req.cookies.get("session");
  if (!token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const valid = await verifyToken(token.value);
  if (!valid) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id: fileId } = await params;
  const file = await prisma.file.findUnique({
    where: { id: fileId },
  });

  if (!file) {
    return NextResponse.json(
      { success: false, message: "File not found" },
      { status: 404 }
    );
  }

  const resolvedPath = path.resolve(file.path);
  if (!isPathUnderRoot(resolvedPath, ROOT_DIR)) {
    await prisma.file.delete({ where: { id: fileId } });
    return NextResponse.json(
      { success: true, message: "File deleted" },
      { status: 200 }
    );
  }

  await prisma.file.delete({ where: { id: fileId } });
  if (fs.existsSync(resolvedPath)) {
    fs.unlinkSync(resolvedPath);
  }

  return NextResponse.json({
    success: true,
    message: "File deleted",
  });
};