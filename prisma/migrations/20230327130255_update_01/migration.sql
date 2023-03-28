-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "reg_no" TEXT,
    "name" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "year_of_study" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "type_of_participation" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
