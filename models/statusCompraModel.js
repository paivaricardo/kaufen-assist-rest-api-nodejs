const { sequelize } = require(".");

// Referência do DDL em SQL:
// CREATE TABLE `tb_status_compra_dom` (
//   `id_status_compra` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//   `dsc_status_compra` VARCHAR(45) NOT NULL
// );

module.exports = (sequelize, DataTypes) => {
  const StatusCompra = sequelize.define(
    'tb_status_compra_dom',
    {
      id_status_compra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      dsc_status_compra: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );

  return StatusCompra;
};