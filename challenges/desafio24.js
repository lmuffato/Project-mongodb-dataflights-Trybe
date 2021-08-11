db.voos.find(
  {
  $and: [
    { $or: [
      { "empresa.nome": { $ne: "GOL" } }, 
      { "empresa.nome": { $ne: "AZUL" } }, 
    ] },
    { litroCombustível: { $exists: true } },
    { litroCombustível: { $lte: 600 } },
  ],
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litroCombustível: 1 },
).limit(1);