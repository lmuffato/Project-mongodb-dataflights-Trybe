db.voos.findOne(
  { "empresa.nome": { $nin: ["GOL", "AZUL"] }, litrosCombustivel: { $lt: 600 } },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
