db.voos.findOne(
  { litrosCombustivel: { $lte: 600 }, "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  { vooId: 1, "empresa.nome": 1, _id: 0, litrosCombustivel: 1 },
  );