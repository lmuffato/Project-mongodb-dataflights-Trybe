db.voos.find({
    $and: [{
      "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
      { "aeroportoOrigem.sigla": "SBGR", "aeroportoDestino.sigla": "KJFK" }] },
  { _id: false, vooId: true }).limit(1);
