/*
  Warnings:

  - You are about to drop the column `metadata` on the `TutorialSubtopic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TutorialSubtopic" DROP COLUMN "metadata",
ADD COLUMN     "metaData" TEXT;
