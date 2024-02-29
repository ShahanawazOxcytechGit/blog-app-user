import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export async function PUT(req) {
  try {
    const { selectedId, title, metaData, content } = await req.json();

    const slug = title
      .toLowerCase() // Convert the title to lowercase
      .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
      .trim() // Trim leading and trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-");

    const TutorialSubtopicToUpdate = await prisma.tutorialSubtopic.findUnique({
      where: {
        id: parseInt(selectedId),
      },
    });
    if (!TutorialSubtopicToUpdate) {
      return NextResponse.error("subtopic not found", { status: 404 });
    }

    const UpdatedTutorialSubtopic = await prisma.tutorialSubtopic.update({
      where: {
        id: parseInt(selectedId),
      },
      data: {
        title,
        metaData,
        content,
        slug,
      },
    });

    return NextResponse.json(UpdatedTutorialSubtopic);
  } catch (err) {
    console.log(err);
    return NextResponse.error("Failed to update tutorial subtopic", {
      status: 500,
    });
  }
}
