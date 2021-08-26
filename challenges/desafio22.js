db.voos.find({ $and: [
  { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
  { "aeroportoDestino.sigla": { $eq: "KJFK" } },
  { $or: [
    { "empresa.nome": { $eq: "DELTA AIRLINES" } },
    { "empresa.nome": { $eq: "AMERICAN AIRLINES" } },
  ] }],
}, {
  _id: 0,
  vooId: 1,
}).limit(1);
