const { sequelize } = require(".");

// CREATE TABLE `tb_compra_produto` (
//   `id_compra_produto` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//   `id_produto` INT NOT NULL,
//   `id_compra` INT NOT NULL,
//   CONSTRAINT `fk_id_produto` FOREIGN KEY (`id_produto`)
//       REFERENCES `tb_produto` (`id_produto`),
//   CONSTRAINT `fk_id_compra` FOREIGN KEY (`id_compra`)
//       REFERENCES `tb_compra` (`id_compra`)
// );

module.exports = (sequelize, DataTypes) => {
  const CompraProduto = sequelize.define(
    'tb_compra_produto',
    {
      id_compra_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_produto',
          key: 'id_produto'
        }
      },
      id_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_compra',
          key: 'id_compra'
        }
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return CompraProduto;
};