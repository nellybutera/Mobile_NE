// models/Token.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Token extends Model {}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    meter_number: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    token_status: {
      type: DataTypes.ENUM("USED", "NEW", "EXPIRED"),
      defaultValue: "NEW",
    },
    token_value_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchased_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Token",
    tableName: "purchased_tokens",
  }
);

module.exports = Token;
