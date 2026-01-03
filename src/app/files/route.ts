
import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import path from "path";
import fs from "fs";
import { decodeJWT, verifyJWT, verifyToken } from "@/lib/jwt";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "uploads");

export const POST = async (req: NextRequest) => {

    const token = req.cookies.get("session");

    if (!token) {
        return NextResponse.json({
            success: false,
            message: "Unauthorized",
        }, { status: 401 });
    }

    const user = await verifyToken(token.value);

    if (!user) {
        return NextResponse.json({
            success: false,
            message: "Unauthorized",
        }, { status: 401 });
    }

    // Get file
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;
    const mimeType = (body.file as File).type || null;

    // Create file
    const newFile = await prisma.file.create({
        data: {
            name: (body.file as File).name,
            path: path.resolve(UPLOAD_DIR),
            size: (body.file as File).size || 0,
            type: mimeType ?? "",
            uploadedById: user.id,
            clientId: (body.clientId as string),
        }
    })

    const extension = (body.file as File).name.split('.').pop();

    if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        if (!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR);
        }

        fs.writeFileSync(
            path.resolve(UPLOAD_DIR, newFile.id + '.' + extension),
            buffer
        );
    } else {
        return NextResponse.json({
            success: false,
        });
    }

    await prisma.file.update({
        where: { id: newFile.id },
        data: {
            path: path.resolve(UPLOAD_DIR, newFile.id + '.' + extension),
        }
    });

    return NextResponse.json({
        success: true,
        name: (body.file as File).name,
    });
};

