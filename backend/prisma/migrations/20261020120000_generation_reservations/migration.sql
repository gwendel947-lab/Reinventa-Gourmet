ALTER TABLE `receita_geracoes` ADD COLUMN `reservaExpiraEm` DATETIME(3) NULL;
CREATE INDEX `receita_geracoes_criadaEm_idx` ON `receita_geracoes` (`criadaEm`);
CREATE TABLE `ia_controle` (
  `id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
INSERT INTO `ia_controle` (`id`) VALUES (1);
