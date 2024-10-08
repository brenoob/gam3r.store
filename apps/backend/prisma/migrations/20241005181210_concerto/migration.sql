/*
  Warnings:

  - You are about to drop the column `precoBaseFloat` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `precoBase` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `nota` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "precoBaseFloat",
ADD COLUMN     "precoBase" DOUBLE PRECISION NOT NULL,
DROP COLUMN "nota",
ADD COLUMN     "nota" DOUBLE PRECISION NOT NULL;
