/*
  Warnings:

  - Added the required column `date` to the `incident` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `incident` ADD COLUMN `date` DATE NOT NULL;
