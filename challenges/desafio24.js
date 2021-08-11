db.voos.findOne({ $and: [
    { litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    { litrosCombustivel: { $exists: true } },
  ],
}, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
