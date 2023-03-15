-- CreateTable
CREATE TABLE "developers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "birth" DATETIME NOT NULL,
    "age" INTEGER NOT NULL,
    "hobby" TEXT NOT NULL,
    "levelId" INTEGER,
    CONSTRAINT "developers_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "levels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" INTEGER NOT NULL
);
