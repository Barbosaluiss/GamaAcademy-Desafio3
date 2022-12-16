const express = require("express");
const Atendimentos = require("../models/Atendimentos");

const atendimentoController = {

    async listarAtendimentos(req, res){
    try{
        const listaAtendimentos = await Atendimentos.findAll();

        res.json(listaAtendimentos);
    }catch(error){
        return res.status(500).json("Ocorreu algum problema!");
    }},

    //Precisa pegar paciente_id
    async atendimentoId(req, res){
        const {id} = req.params;
        await Atendimentos.findOne({
            where: {
                id
            },
        });

        res.json("Atendimento atual");
    },
    
    async registrarAtendimento(req, res){
        try{
        const {idade, observacao} = req.body;

        if(!id){
            return res.status(400).json("Dados faltando!");
        };
        const novoAtendimento = await Atendimentos.create({idade, observacao});

        res.status(201).json(novoAtendimento);
    } catch(error){
        return res.status(500).json("Ocorreu algum problema!");
    }},
};


module.exports = atendimentoController;