db.voos.find(
  { $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },  
  ] },
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0 },
).limit(1);