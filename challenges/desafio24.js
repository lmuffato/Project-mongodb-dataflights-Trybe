db.voos
  .findOne({
    $nor: [{ litrosCombustivel: 600 }, { "empresa.nome": ["GOL", "AZUL"] }],
    litrosCombustivel: { $exists: 1 } },
   { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
