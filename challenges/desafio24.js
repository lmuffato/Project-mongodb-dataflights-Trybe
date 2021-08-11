db.voos.find(
    {
        $nor: [ 
            { "empresa.nome": "GOL" },
            { "empresa.nome": "AZUL" },
        ],
        $and: [ 
            { litrosCombustivel: { $exists: true } },
            { litrosCombustivel: { $lte: 600 } },
        ],
    },
    {
        _id: 0,
        "empresa.nome": 1,
        litrosCombustivel: 1,
        vooId: 1,
    },
).limit(1);