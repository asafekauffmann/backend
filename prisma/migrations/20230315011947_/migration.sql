/*
  Warnings:

  - A unique constraint covering the columns `[level]` on the table `levels` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "levels_level_key" ON "levels"("level");
