db.voos.findOne({ $or: [{ "empresa.nome": "DELTA AIRLINES" }, 
{ "empresa.nome": "AMERICAN AIRLINES" }],
"aeroportoOrigem.sigla": "SBGR", 
"aeroportoDestino.sigla": "KJFK" }, { _id: 0, vooId: 1 });
