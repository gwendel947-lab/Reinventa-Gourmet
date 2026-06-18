-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `nivelHabilidade` ENUM('INICIANTE', 'INTERMEDIARIO', 'AVANCADO') NOT NULL DEFAULT 'INICIANTE',
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `perfis_alimentares` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `tipoDieta` ENUM('ONIVORO', 'VEGETARIANO', 'VEGANO', 'PESCATARIANO', 'CETOGENICO', 'OUTRO') NOT NULL DEFAULT 'ONIVORO',
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `perfis_alimentares_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `restricoes_alimentares` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `perfilId` INTEGER NOT NULL,
    `tipo` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingredientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(150) NOT NULL,
    `categoria` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `ingredientes_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `ingredienteId` INTEGER NOT NULL,
    `quantidade` DOUBLE NOT NULL,
    `unidade` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `inventario_usuarioId_ingredienteId_key`(`usuarioId`, `ingredienteId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receitas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `titulo` VARCHAR(200) NOT NULL,
    `modoPreparo` TEXT NOT NULL,
    `tempoEstimado` INTEGER NOT NULL,
    `porcoes` INTEGER NOT NULL DEFAULT 1,
    `publica` BOOLEAN NOT NULL DEFAULT true,
    `geradaPorIA` BOOLEAN NOT NULL DEFAULT false,
    `criadaEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadaEm` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receita_ingredientes` (
    `receitaId` INTEGER NOT NULL,
    `ingredienteId` INTEGER NOT NULL,
    `quantidade` DOUBLE NOT NULL,
    `unidade` VARCHAR(30) NOT NULL,
    `opcional` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`receitaId`, `ingredienteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `receitaId` INTEGER NULL,
    `imagemPrato` VARCHAR(500) NULL,
    `comentario` TEXT NULL,
    `criadaEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `perfis_alimentares` ADD CONSTRAINT `perfis_alimentares_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `restricoes_alimentares` ADD CONSTRAINT `restricoes_alimentares_perfilId_fkey` FOREIGN KEY (`perfilId`) REFERENCES `perfis_alimentares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_ingredienteId_fkey` FOREIGN KEY (`ingredienteId`) REFERENCES `ingredientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receitas` ADD CONSTRAINT `receitas_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receita_ingredientes` ADD CONSTRAINT `receita_ingredientes_receitaId_fkey` FOREIGN KEY (`receitaId`) REFERENCES `receitas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `receita_ingredientes` ADD CONSTRAINT `receita_ingredientes_ingredienteId_fkey` FOREIGN KEY (`ingredienteId`) REFERENCES `ingredientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postagens` ADD CONSTRAINT `postagens_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postagens` ADD CONSTRAINT `postagens_receitaId_fkey` FOREIGN KEY (`receitaId`) REFERENCES `receitas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
