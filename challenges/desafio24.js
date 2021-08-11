db.voos.findOne(
  {
    litrosCombustivel: { $exists: true, $lt: 600 },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { "empresa.nome": 1, litrosCombustivel: 1, vooId: 1, _id: 0 },
);