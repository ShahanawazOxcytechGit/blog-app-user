import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export async function POST(req) {
  try {
    const { title, metaData, content } = await req.json();

    const slug = title
      .toLowerCase() // Convert the title to lowercase
      .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
      .trim() // Trim leading and trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-");

    const newSubtopic = await prisma.tutorialSubtopic.create({
      data: { title, metaData, content, slug },
    });
    return NextResponse.json(newSubtopic);
  } catch (err) {
    console.log(err);
    return NextResponse.error("Failed to Add Tutorial subtopic", {
      status: 500,
    });
  }
}
