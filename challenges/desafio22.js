// challenge 22;

db.voos.findOne(
  {
    $or: [
      { "empresa.nome": "AMERICAN AIRLINES" },
      { "empresa.nome": "DELTA AIRLINES" },
  ],
  $and: [
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
  ] },
  { vooId: 1, _id: 0 },
);
