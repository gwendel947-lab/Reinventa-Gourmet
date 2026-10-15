ALTER TABLE `ingredientes`
  ADD COLUMN `classificacaoStatus` VARCHAR(30) NOT NULL DEFAULT 'NAO_VERIFICADO',
  ADD COLUMN `dietasPermitidas` TEXT NULL,
  ADD COLUMN `restricoes` TEXT NULL;

CREATE TABLE `favoritos` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `usuarioId` INTEGER NOT NULL,
  `receitaId` INTEGER NOT NULL,
  `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  UNIQUE INDEX `favoritos_usuarioId_receitaId_key`(`usuarioId`, `receitaId`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `receita_geracoes` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `usuarioId` INTEGER NOT NULL,
  `chaveCache` VARCHAR(191) NOT NULL,
  `modelo` VARCHAR(100) NOT NULL,
  `status` VARCHAR(30) NOT NULL,
  `payload` JSON NULL,
  `erroCodigo` VARCHAR(50) NULL,
  `rascunhoExpiraEm` DATETIME(3) NULL,
  `criadaEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `finalizadaEm` DATETIME(3) NULL,
  `duracaoMs` INTEGER NULL,
  INDEX `receita_geracoes_usuarioId_criadaEm_idx`(`usuarioId`, `criadaEm`),
  INDEX `receita_geracoes_usuarioId_chaveCache_idx`(`usuarioId`, `chaveCache`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favoritos_receitaId_fkey` FOREIGN KEY (`receitaId`) REFERENCES `receitas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `receita_geracoes`
  ADD CONSTRAINT `receita_geracoes_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
