import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import fs from "fs";

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
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

    const { id: fileId } = await params;
    const isDownload = req.nextUrl.searchParams.get("download") === "true";

    const file = await prisma.file.findUnique({
        where: { id: fileId },
    });

    if (!file) {
        return NextResponse.json({
            success: false,
            message: "File not found",
        }, { status: 404 });
    }

    // Return file content
    const fileContent = fs.readFileSync(file.path);

    if (isDownload) {
        return new NextResponse(Buffer.from(fileContent), {
            headers: {
                "Content-Type": file.type,
                "Content-Disposition": `attachment; filename="${file.name}"`,
            },
        });
    }
    else {
        return new NextResponse(Buffer.from(fileContent), {
            headers: {
                "Content-Type": file.type,
            },
        });
    }
}


export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const token = req.cookies.get("session");

    if (!token) {
        return NextResponse.json({
            success: false,
            message: "Unauthorized",
        }, { status: 401 });
    }

    const valid = await verifyToken(token.value);

    if (!valid) {
        return NextResponse.json({
            success: false,
            message: "Unauthorized",
        }, { status: 401 });
    }

    const { id: fileId } = await params;

    const file = await prisma.file.findUnique({
        where: { id: fileId },
    });

    if (!file) {
        return NextResponse.json({
            success: false,
            message: "File not found",
        }, { status: 404 });
    }

    await prisma.file.delete({
        where: { id: fileId },
    });

    if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
    }

    return NextResponse.json({
        success: true,
        message: "File deleted",
    });
};