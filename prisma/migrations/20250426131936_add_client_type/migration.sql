/*
  Warnings:

  - Added the required column `typeKey` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `typeKey` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `client_type` (
    `key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `client_typeKey_fkey` FOREIGN KEY (`typeKey`) REFERENCES `client_type`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;
