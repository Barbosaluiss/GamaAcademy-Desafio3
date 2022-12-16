const Psicologos = require("./psicologos");
const Pacientes = require("./Pacientes");
// const Atendimentos = require("./atendimentos");


// psicologos.hasMany(Atendimentos, {
//   foreignKey: "psicologos_id",
// });

// atendimentos.belongsTo(Psicologos, {
//   foreignKey: "psicologos_id",
// });

// pacientes.hasMany(Atendimentos, {
//   foreignKey: "pacientes_id",
// });

// atendimentos.belongsTo(Pacientes, {
//   foreignKey: "psicologos_id",
// });



module.exports = {
  Psicologos,
  Pacientes,
  // Atendimentos,
};
