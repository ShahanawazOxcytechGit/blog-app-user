-- CreateTable
CREATE TABLE "TutorialTopic" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" TEXT,

    CONSTRAINT "TutorialTopic_pkey" PRIMARY KEY ("id")
);
