-- AlterTable
ALTER TABLE "PlatformAccount" ADD COLUMN "accessToken" TEXT;
ALTER TABLE "PlatformAccount" ADD COLUMN "refreshToken" TEXT;
ALTER TABLE "PlatformAccount" ADD COLUMN "tokenExpiry" DATETIME;
