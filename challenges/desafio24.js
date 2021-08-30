db.voos.find(
    { $and:
        [
            { litrosCombustivel: { $eq: true } },
            { litrosCombustivel: { $lt: 600 } },
            { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
        ],
    },
    { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
).limit(1);