// Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES, a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK
db.voos.find({ $and: [{ $or: [{ "empresa.nome": "DELTA AIRLINES" },
  { "empresa.nome": "AMERICAN AIRLINES" }] },
  { "aeroportoOrigem.sigla": "SBGR" },
  { "aeroportoDestino.sigla": "KJFK" }] },
  { _id: 0, vooId: 1 }).limit(1);
