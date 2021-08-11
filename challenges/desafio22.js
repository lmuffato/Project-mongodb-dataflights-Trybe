db.voos.findOne({
  $and: [
    { litrosCombustivel: { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    { "aeroportoOrigem.sigla": "SBGR" },
    { "aeroportoOrigem.Destino": "KJFK" },
    
  ] }, { vooId: 1, _id: 0 });
