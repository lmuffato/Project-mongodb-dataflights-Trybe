db.voos.find({
  $and: [
    { litroCombustível: { $exists: true } },
    { litroCombustível: { $lte: 1000 } }, 
  ] },
  { _id: 0, vooId: 1, litroCombustível: 1 }).limit(1);