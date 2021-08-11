db.voos.find(
  {
  $and: [
    { litroCombustível: { $lte: 1000 } }, 
    { litroCombustível: { $exists: true } },
  ],
  },
  { _id: 0, vooId: 1, litroCombustível: 1 },
).limit(1);