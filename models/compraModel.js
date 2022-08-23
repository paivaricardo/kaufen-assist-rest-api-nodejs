const { sequelize } = require(".");

// Referência do DDL em SQL:
// CREATE TABLE `tb_compra` (
//   `id_compra` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//   `total` DECIMAL(8 , 2 ) NOT NULL,
//   `id_tipo_pagamento` INT NOT NULL,
//   `id_status_compra` INT NOT NULL,
//   `data_criacao` DATETIME NOT NULL,
//   CONSTRAINT `fk_id_status_compra` FOREIGN KEY (`id_status_compra`)
//       REFERENCES `tb_status_compra_dom` (`id_status_compra`),
//   CONSTRAINT `fk_id_tipo_pagamento` FOREIGN KEY (`id_tipo_pagamento`)
//       REFERENCES `tb_tipo_pagamento_dom` (`id_tipo_pagamento`)
// );

// CREATE TABLE `tb_compra_produto` (
//   `id_compra_produto` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//   `id_produto` INT NOT NULL,
//   `id_compra` INT NOT NULL,
//   CONSTRAINT `fk_id_produto` FOREIGN KEY (`id_produto`)
//       REFERENCES `tb_produto` (`id_produto`),
//   CONSTRAINT `fk_id_compra` FOREIGN KEY (`id_compra`)
//       REFERENCES `tb_compra` (`id_compra`)
// );

// CREATE TABLE `tb_status_compra_dom` (
//   `id_status_compra` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//   `dsc_status_compra` VARCHAR(45) NOT NULL
// );

// CREATE TABLE `tb_tipo_pagamento_dom`
// (
// `id_tipo_pagamento`  int PRIMARY KEY NOT NULL AUTO_INCREMENT ,
// `dsc_tipo_pagamento` varchar(45) NOT NULL
// );

module.exports = (sequelize, DataTypes) => {
  const Compra = sequelize.define(
    'tb_compra',
    {
      id_compra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      total: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false,
      },
      data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_tipo_pagamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_tipo_pagamento_dom',
          key: 'id_tipo_pagamento'
        }
      },
      id_status_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_status_compra_dom',
          key: 'id_status_compra'
        }
      }
    },
    { freezeTableName: true, timestamps: false }
  );

  return Compra;
};