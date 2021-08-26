db.voos.find({ 
  litrosCombustivel: { $not: { $gt: 600 }, $exists: 1 },
  "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
  { _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
  }).limit(1);
