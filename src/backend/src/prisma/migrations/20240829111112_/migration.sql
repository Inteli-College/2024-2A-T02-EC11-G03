-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'DEFAULT_ROLE');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role"[] DEFAULT ARRAY['DEFAULT_ROLE']::"Role"[],
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStatusEvent" (
    "id" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,
    "status" "UserStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserStatusEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserStatusEvent" ADD CONSTRAINT "UserStatusEvent_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
