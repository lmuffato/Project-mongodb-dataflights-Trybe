db.voos.findOne(
  { $or: [{ "empresa.nome": "DELTA AIRLINES" },
    { "empresa.nome": "AMERICAN AIRLINES" }],
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoDestino.sigla": "KJFK" }, { vooId: 1, _id: false },
);
