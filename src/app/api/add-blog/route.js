import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
import { put } from "@vercel/blob";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();

    const data = await req.formData();
    const title = data.get("title");
    const metaData = data.get("metaData");
    const image = data.get("image");
    const content = data.get("content");

    const slug = title
      .toLowerCase() // Convert the title to lowercase
      .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
      .trim() // Trim leading and trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-");

    const blob = await put(image.name, image, {
      access: "public",
    });

    const result = await prisma.blog.create({
      data: {
        title: title,
        metaData: metaData,
        image: blob.url,
        content: content,
        slug: slug,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error during blog addition:", error);
    return NextResponse.json({ success1: false, error: "Failed to add blog" }, { status: 500 });
  }
}
