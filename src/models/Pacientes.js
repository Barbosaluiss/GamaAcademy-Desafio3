const db = require("../../../Desafio 3/src/database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
    "Pacientes", 
    { 
        id_paciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      idade: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Pacientes",
      timestamps: false,
    }
);

module.exports = Pacientes;