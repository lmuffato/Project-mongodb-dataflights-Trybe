db.voos.findOne(
    { litrosCombustivel: { $exists: true, $lte: 600 }, 
    $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] }, 
    { vooId: 1, "empresa.nome": 1,  litrosCombustivel: 1, _id: 0 },
);
