
const express = require("express");
const psicologosController = require("../controllers/psicologosController");

// const auth = require("../middlewares/auth");
const routes = express.Router();

// ----->>>>> CRUD
routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologobyId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarCadastro);

module.exports = routes;