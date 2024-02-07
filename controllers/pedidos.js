const prisma = require('../config/db');

exports.criarPedido = async (req, res) => {
    var { mesa, pratos } = req.body;
    try{
        var pedido = await prisma.pedido.create({
            data: {
                mesa,
                pratos: {
                    connect: pratos
                }
            },
        });
        res.status(201).json(pedido);
        return;
    } catch (e){
        res.status(400).json(e);
        return;
    }
}

exports.listarPedidos = async (req, res) => {
    try {
        var pedidos = await prisma.pedido.findMany({
            include: {
                pratos: true
            }
        })
        res.status(200).json(pedidos);
    } catch (e) {
        res.status(400).json(e);
    }
}

exports.listarPedido = async (req, res) => {
    var id = Number(req.params.id)
    try {
        var pedidos = await prisma.pedido.findFirst({
            where: {
                id: id
            },
            include: {
              pratos: true  
            }
        })
        res.status(200).json(pedidos);
    } catch (e) {
        res.status(400).json(e);
    }
}

