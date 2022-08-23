const { sequelize } = require(".");

// Referência do DDL em SQL:
// CREATE TABLE `tb_tipo_pagamento_dom`
// (
// `id_tipo_pagamento`  int PRIMARY KEY NOT NULL AUTO_INCREMENT ,
// `dsc_tipo_pagamento` varchar(45) NOT NULL
// );

module.exports = (sequelize, DataTypes) => {
  const TipoPagamento = sequelize.define(
    'tb_tipo_pagamento_dom',
    {
      id_tipo_pagamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      dsc_tipo_pagamento: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );

  return TipoPagamento;
};