/*
  Warnings:

  - Added the required column `city` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complement` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `area` to the `Quarter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dead_trees` to the `Quarter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Quarter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dead_trees` to the `Scan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT NOT NULL,
ADD COLUMN     "neighborhood" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Quarter" ADD COLUMN     "area" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dead_trees" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Scan" ADD COLUMN     "dead_trees" INTEGER NOT NULL;
