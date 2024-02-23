-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "action" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TutorialSubtopic" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "metaData" TEXT,
    "content" TEXT NOT NULL,

    CONSTRAINT "TutorialSubtopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
