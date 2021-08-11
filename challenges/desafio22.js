db.voos.find({
  $and: [
    { $or: [{ "empresa.nome": "DELTA AIRLINES" }, { "empresa.nome": "AMERICAN AIRLINES" }] },
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
  ],
}, { _id: 0, vooId: 1 }).limit(1);
