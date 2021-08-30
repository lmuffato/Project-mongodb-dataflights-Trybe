db.voos.find(
    { $and:
        [
            { litrosCombustivel: { $eq: true } },
            { litrosCombustivel: { $lt: 1000 } },
        ],
    },
    { vooId: 1, litrosCombustivel: 1 },
).limit(1);