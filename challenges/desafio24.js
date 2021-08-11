db.voos.find(
  { $and: [
    { litrosCombustivel: { $lt: 600 } }, 
    { litrosCombustivel: { $exists: 1 } }, 
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ] }, 
  { vooId: 1, litrosCombustivel: 1, "empresa.nome": 1, _id: 0 },
).limit(1); 