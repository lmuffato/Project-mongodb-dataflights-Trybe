// 22 - Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES,
// a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK.
db.voos.find({ $and: [
{ "aeroportoOrigem.sigla": { $eq: "SBGR" } },
{ "aeroportoDestino.sigla": { $eq: "KJFK" } },
{ $or: [
{ "empresa.nome": { $eq: "DELTA AIRLINES" } },
{ "empresa.nome": { $eq: "AMERICAN AIRLINES" } },
] }],
}, {
vooId: 1,
_id: 0,
}).limit(1);
