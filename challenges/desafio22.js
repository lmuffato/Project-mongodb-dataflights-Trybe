db.voos.find({
  $and: [
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoDestino.sigla": "KJFK" },
    {
      $or: [
        { "empresa.nome": "DELTA AIRLINES" },
        { "empresa.nome": "AMERICAN AIRLINES" }],
    }],
},
  { vooId: 1, _id: 0 }).limit(1);
