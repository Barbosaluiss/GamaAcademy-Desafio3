const db = require("../database/connection");
const {DataTypes} = require("sequelize");

const Atendimentos = db.define("Atendimentos", {

    paciente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true     
        },
    
    idade: {
        type: DataTypes.DATE,
    },

    observacao: {
        type: DataTypes.STRING
    }, 

}, {
    tableName: "atendimentos", 
    timestamps: false,
});


module.exports = Atendimentos;