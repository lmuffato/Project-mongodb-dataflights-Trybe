db.voos.findOne(
  { $and: [
       { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
       { "aeroportoDestino.sigla": { $eq: "KJFK" } },
     { $or: [
    { "empresa.nome": "DELTA AIRLINES" },
    { "empresa.nome": "AMERICAN AIRLINES" }] },
     ] },
   { vooId: 1, _id: 0 },
);
