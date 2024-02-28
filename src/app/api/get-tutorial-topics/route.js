import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(res) {
  try {
    const allTutorialTopics = await prisma.tutorialTopic.findMany();
    return NextResponse.json(allTutorialTopics);
  } catch (err) {
    console.error("Error fetching all tutorial topics:", err);
    return NextResponse.error("Failed to fetch tutorial topics", {
      status: 500,
    });
  }
}
