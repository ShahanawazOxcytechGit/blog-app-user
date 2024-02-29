import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { put } from "@vercel/blob";

export async function PUT(req) {
  const prisma = new PrismaClient();
  try {
    const data = await req.formData();
    const image = data.get("image");
    const title = data.get("title");
    const metaData = data.get("metaData");
    const content = data.get("content");
    const selectedId = data.get("selectedId");
    const previousimage = data.get("previousimage");
    if (!image) {
      return NextResponse.json({ success1: false });
    }

    const slug = title
      .toLowerCase() // Convert the title to lowercase
      .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
      .trim() // Trim leading and trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-");

    if (typeof image === "object") {
      const blob = await put(image.name, image, {
        access: "public",
      });

      const result = await prisma.blog.update({
        where: { id: Number(selectedId) },
        data: {
          title: title,
          metaData: metaData,
          image: blob.url,
          content: content,
          slug: slug,
        },
      });

      return NextResponse.json(result);
    }

    if (typeof image === "string") {
      const result = await prisma.blog.update({
        where: { id: Number(selectedId) },
        data: {
          title: title,
          metaData: metaData,
          image: previousimage,
          content: content,
          slug: slug,
        },
      });

      return NextResponse.json(result);
    }
  } catch (error) {
    console.error("Error during blog addition:", error);
    return NextResponse.json({ success1: false, error: "Failed to add blog" }, { status: 500 });
  }
}
