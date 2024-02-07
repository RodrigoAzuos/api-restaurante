const prisma = require('../config/db');

exports.testeApi = (req, res) => {
    res.status(200).json({estado: "ok"});
    return
};

exports.criarPrato = async (req, res) => {
    var { nome, descricao, ingredientes, tempoPreparo, valor } = req.body;
    try {
        const prato = await prisma.prato.create({
            data: {
                nome,
                descricao,
                ingredientes,
                tempoPreparo,
                valor
            },
        });
        res.status(201).json(prato);
        return;
    } catch (e){
        res.status(400).json(e);
        return;
    }
}

exports.listarPratos = async (req, res) => {
    try {
        var pratos = await prisma.prato.findMany()
        res.status(200).json(pratos);
    } catch (e) {
        res.status(400).json(e);
    }
};

exports.atualizarPrato = async (req, res) => {
    var { nome, descricao, ingredientes, tempoPreparo, valor } = req.body;
    try {
        var id = Number(req.params.id)
        const prato = await prisma.prato.update({
            where: { 
                id : id
            },
            data: {
                nome,
                descricao,
                ingredientes,
                tempoPreparo,
                valor
            },
        });
        res.status(200).json(prato);
        return;
    } catch (e){
        res.status(400).json(e);
        return;
    }
}

exports.deletarPrato = async(req, res) => {
    try {
        var id = Number(req.params.id)
        var prato = await prisma.prato.delete({
            where: { 
                id : id
            }
        });
        res.status(200).json(prato);
    } catch (e) {
        res.status(400).json(e);
    }
}