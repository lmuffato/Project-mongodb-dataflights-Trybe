db.voos.findOne({
  $and: [ 
  { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
  { "aeroportoOrigem.sigla": { $in: ["SBGR"] } },
  { "aeroportoDestino.sigla": { $in: ["KJFK"] } },
  ] }, { _id: 0, vooId: 1 });
