/*
  Warnings:

  - Made the column `icon` on table `device_type` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `device_type` MODIFY `icon` VARCHAR(191) NOT NULL;
