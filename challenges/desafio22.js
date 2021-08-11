db.voos.findOne(
  {
    $and: [
      { "empresa.nome": { $in: ["AMERICAN AIRLINES", "DELTA AIRLINES"] } },
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino.sigla": "KJFK" },
    ],
  }, { vooId: 1, _id: 0 },
);
