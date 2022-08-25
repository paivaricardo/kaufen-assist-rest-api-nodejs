-- Scripts DDL para a criação do banco de dados do sistema Kaufen_Assist
DROP DATABASE db_kaufen;

CREATE DATABASE db_kaufen;
USE db_kaufen;

CREATE TABLE `tb_produto` (
    `id_produto` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(1000) NOT NULL,
    `preco` DECIMAL(9 , 2 ) NOT NULL,
    `data_criacao` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `data_atualizacao` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `ic_ativo` BOOLEAN NOT NULL DEFAULT 1
);

CREATE TABLE `tb_status_compra_dom` (
    `id_status_compra` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `dsc_status_compra` VARCHAR(45) NOT NULL
);

CREATE TABLE `tb_tipo_pagamento_dom`
(
 `id_tipo_pagamento`  int PRIMARY KEY NOT NULL AUTO_INCREMENT ,
 `dsc_tipo_pagamento` varchar(45) NOT NULL
);

CREATE TABLE `tb_compra` (
    `id_compra` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `total` DECIMAL(10,2) NOT NULL,
    `id_tipo_pagamento` INT NOT NULL,
    `id_status_compra` INT NOT NULL,
    `data_criacao` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `fk_id_status_compra` FOREIGN KEY (`id_status_compra`)
        REFERENCES `tb_status_compra_dom` (`id_status_compra`),
    CONSTRAINT `fk_id_tipo_pagamento` FOREIGN KEY (`id_tipo_pagamento`)
        REFERENCES `tb_tipo_pagamento_dom` (`id_tipo_pagamento`)
);

CREATE TABLE `tb_compra_produto` (
    `id_compra_produto` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `id_produto` INT NOT NULL,
    `id_compra` INT NOT NULL,
    `qtd_compra` INT NOT NULL,
    CONSTRAINT `fk_id_produto` FOREIGN KEY (`id_produto`)
        REFERENCES `tb_produto` (`id_produto`),
    CONSTRAINT `fk_id_compra` FOREIGN KEY (`id_compra`)
        REFERENCES `tb_compra` (`id_compra`) ON DELETE CASCADE ON UPDATE CASCADE
);