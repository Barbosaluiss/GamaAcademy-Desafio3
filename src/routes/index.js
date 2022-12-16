const express = require("express");
const psicologosController = require("../controllers/psicologosController");
const atendimentoController = require("../controllers/atendimentosController");

// const auth = require("../middlewares/auth");
const routes = express.Router();

// ----->>>>> CRUD

//Psicicologos
routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologobyId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarCadastro);

//Atendimentos

routes.get("atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.atendimentoId);
outes.post("/atendimentos", atendimentosController.registrarAtendimento);

module.exports = routes;