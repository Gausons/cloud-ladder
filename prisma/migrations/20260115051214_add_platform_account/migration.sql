-- CreateTable
CREATE TABLE "PlatformAccount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platform" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatar" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PlatformAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
