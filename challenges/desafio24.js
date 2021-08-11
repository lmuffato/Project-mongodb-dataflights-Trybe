db.voos.find(
  {
  $and: [
    { $or: [
      { "empresa.nome": { $ne: "GOL" } }, 
      { "empresa.nome": { $ne: "AZUL" } }, 
    ] },
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lte: 600 } },
  ],
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
).limit(1);