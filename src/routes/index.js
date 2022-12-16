
const express = require("express");
const psicologosController = require("../controllers/psicologosController");

const authController = require("../controllers/authController");
const requestLog = require("../middlewares/requestLog");

const authLoginValidation = require("../validations/auth/login");

const auth = require("../middlewares/auth");
const routes = express.Router();

// ----->>>>> CRUD
routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologobyId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarCadastro);

routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;
