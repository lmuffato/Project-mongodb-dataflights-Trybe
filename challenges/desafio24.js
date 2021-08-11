db.voos.find({ $and: [
  { litrosCombustivel: { $lt: 600 } },
  { litrosCombustivel: { $exists: true } },
  { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ] },
  { "empresa.nome": 1, litrosCombustivel: 1, vooId: 1, _id: 0 }).limit(1);