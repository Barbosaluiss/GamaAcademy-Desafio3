const { Psicologos } = require("../models");

// ---------->>>>> Listar todos os psicólogos:

const psicologosController = {
    listarPsicologos: async (req, res) => {
        const listaDePsicologos = await Psicologos.findAll();

        res.json(listaDePsicologos);
    },

// ---------->>>>> Buscar psicólogo por ID:

    listarPsicologobyId: async (req, res) => {
        try {
            const { id } = req.params;

            const psicologo = await Psicologos.findOne({
                where: {
                    id,
                },
            });

// fazer um if no caso !psicologo

            res.status(200).json(psicologo);


        } catch (error) {
            return res.status(404).json("Id não encontrado. 😞 Digitou certo?");
        }
    },

// ---------->>>>> Cadastrar psicólogo:

    async cadastrarPsicologo(req, res) {
        try {
            console.log(req.auth);

            const { nome, email, senha, apresentacao } = req.body;

            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha,
                apresentacao,
            });

            res.status(201).json(novoPsicologo);

            if (!nome || !email || !senha || !apresentacao){
                return res.status(400).json("Todos os campos precisam ser preenchidos.")
            };

        } catch (err) {
            console.log(err);
            return res
                .status(500)
                .json("Erro ao tentar processar, contate o suporte 💀");
                
        }
    },

// ---------->>>>> Deletar psicólogo:

    async deletarPsicologo(req, res) {
        try {
            const { id } = req.params;

            await Psicologos.destroy({
                where: {
                    id,
                },
            });

            res.sendStatus(204);
        } catch (error) {
            return res.status(500).json("Ocorreu algum problema 😞");
        }
    },

// ---------->>>>> Atualizar:

    async atualizarCadastro(req, res) {
        const { id } = req.params;
        const { nome, email, apresentacao } = req.body;

        if (!id) return res.status(400).json("id não enviado 💔");

        const psicologoAtualizado = await Psicologos.update(
            {
                nome,
                email,
                apresentacao,
            },
            {
                where: {
                    id,
                },
            }
        );

        res.json("Dados atualizados com sucesso! ✨✨");
    },
};

module.exports = psicologosController;
