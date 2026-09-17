CREATE TABLE `comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `receitaId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `respostaDeId` INTEGER NULL,
    `texto` TEXT NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `comentarios_receitaId_criadoEm_idx`(`receitaId`, `criadoEm`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `comentarios` ADD CONSTRAINT `comentarios_receitaId_fkey` FOREIGN KEY (`receitaId`) REFERENCES `receitas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `comentarios` ADD CONSTRAINT `comentarios_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `comentarios` ADD CONSTRAINT `comentarios_respostaDeId_fkey` FOREIGN KEY (`respostaDeId`) REFERENCES `comentarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;