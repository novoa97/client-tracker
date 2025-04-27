-- DropForeignKey
ALTER TABLE `device` DROP FOREIGN KEY `device_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `license` DROP FOREIGN KEY `license_clientId_fkey`;

-- DropIndex
DROP INDEX `device_clientId_fkey` ON `device`;

-- DropIndex
DROP INDEX `license_clientId_fkey` ON `license`;

-- AddForeignKey
ALTER TABLE `license` ADD CONSTRAINT `license_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `device` ADD CONSTRAINT `device_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
