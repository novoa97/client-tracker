-- DropForeignKey
ALTER TABLE `license` DROP FOREIGN KEY `license_parentId_fkey`;

-- DropIndex
DROP INDEX `license_parentId_fkey` ON `license`;

-- AlterTable
ALTER TABLE `license` MODIFY `parentId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `license` ADD CONSTRAINT `license_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `license`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
