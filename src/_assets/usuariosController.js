const { Usuario } = require("../models");
const bcrypt = require("bcryptjs");
// BCRYPT serve para que a visualização da senha seja criptografada

const UsuariosController = {
  async registro(req, res) {
    const { nome, email, senha } = req.body;

    const newSenha = bcrypt.hashSync(senha, 10);
    // aqui aplicamos o código pra senha não ficar com visualização disponível

    const newUsuario = await Usuarios.create({ nome, email, senha: newSenha });

    return res.status(201).json(newUsuario);
  },
};

module.exports = UsuariosController;
