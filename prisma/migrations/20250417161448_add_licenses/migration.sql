-- CreateTable
CREATE TABLE `license` (
    `id` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `typeKey` VARCHAR(191) NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `license_type` (
    `key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `license_type_key_key`(`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `license` ADD CONSTRAINT `license_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `license` ADD CONSTRAINT `license_typeKey_fkey` FOREIGN KEY (`typeKey`) REFERENCES `license_type`(`key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `license` ADD CONSTRAINT `license_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `license`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
