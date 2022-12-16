const Pacientes = require("../models/Pacientes");

const pacientesController = {
  async listarPacientes(req, res) {
    try {
      const pacientes = await Pacientes.findAll();

      return res.status(200).json(pacientes);
    } catch (error) {
      console.log(error);
      return res.status(404).json("Ocorreu um erro");
    }
  },

  async buscarPaciente(req, res) {
    try {
      const {id_paciente} = req.params;

      const Paciente = await Pacientes.findOne({
        where: {
          id_paciente,
        },
      });

      return res.status(200).json(Paciente);
    } catch (error) {
      console.log(error);
      return res.status(404).json("id não encontrado");
    }
  },

  async cadastrarPaciente(req, res) {
    const { nome, email, idade } = req.body;

    const novoPaciente = await Pacientes.create({ nome, email, idade});

    return res.status(201).json(novoPaciente);
  },
 
  async deletarPaciente(req, res) {
    try {
      const { id_paciente } = req.params;

     await Pacientes.destroy({
        where: {
          id_paciente,
        },
      }); 

      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).json("id não encontrado");
    }
  }, 
  
  async atualizarPaciente(req, res) {
    try {
      const { id_paciente } = req.params;
      const { nome, email, idade } = req.body;

      const pacienteAtualizado = await Pacientes.update(
        {
          nome,
          email,
          idade,
        },
        {
          where: {
            id_paciente,
          },
        });

      return res.sendStatus(200);
    } catch (error) {
      return res.status(400).json("Ocorreu um erro");
    }
  }, 
};

module.exports = pacientesController