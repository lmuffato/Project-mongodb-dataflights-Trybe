db.voos.find({ $and: [
  { litrosCombustivel: { $exists: true } },
  { litrosCombustivel: { $lt: 600 } },
  { $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
] }, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 })
.limit(1);
