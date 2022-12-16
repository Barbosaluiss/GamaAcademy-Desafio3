const express = require("express");
const psicologosController = require("../controllers/psicologosController");
//<<<<<<< HEAD
const atendimentoController = require("../controllers/atendimentosController");
//=======
const pacientesController = require("../controllers/pacientesController");
//>>>>>>> 84b1057945d334d65d40f94dafd8127b3fd2d1a4

const authController = require("../controllers/authController");
const requestLog = require("../middlewares/requestLog");

const authLoginValidation = require("../validations/auth/login");

const auth = require("../middlewares/auth");
const routes = express.Router();

// ----->>>>> CRUD
//<<<<<<< HEAD

//Psicicologos
routes.get("/psicologos", psicologosController.listarPsicologos);

routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
//>>>>>>> 84b1057945d334d65d40f94dafd8127b3fd2d1a4
routes.get("/psicologos/:id", psicologosController.listarPsicologobyId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarCadastro);

//<<<<<<< HEAD
//Atendimentos

routes.get("atendimentos", atendimentoController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentoController.atendimentoId);
outes.post("/atendimentos", atendimentoController.registrarAtendimento);

module.exports = routes;
//=======
routes.post("/login", authLoginValidation, authController.login);

routes.get("/pacientes", pacientesController.listaPacientes);
routes.get("/pacientes/:id_paciente", pacientesController.buscarPaciente);
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id_paciente", pacientesController.deletarPaciente);
routes.put("/pacientes/:id_paciente", pacientesController.atualizarPaciente);

module.exports = routes;
//>>>>>>> 84b1057945d334d65d40f94dafd8127b3fd2d1a4
