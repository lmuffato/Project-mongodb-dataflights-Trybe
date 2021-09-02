db.voos.findOne({
    $nor: [{ "empresa.nome": ["GOL", "AZUL"] }],
    litrosCombustivel: { $exists: 1, $lt: 600 } },
   { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
