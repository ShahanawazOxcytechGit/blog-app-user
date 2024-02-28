import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const params = new URLSearchParams(req.url.split("?")[1]);

    // Now you can access individual parameters using the get method
    const tutorialSlug = params.get("slug");

    const fetchedTutorial = await prisma.tutorialSubtopic.findFirst({ where: { slug: tutorialSlug } });

    return NextResponse.json(fetchedTutorial);
  } catch (error) {
    console.error("Error during blog fetching:", error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
