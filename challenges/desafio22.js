db.voos.findOne(
  {
  "empresa.nome": { $in: ["AIRLINES", "AMERICAN AIRLINES"] },
  "aeroportoOrigem.sigla": "SBGR",
  "aeroportoDestino.sigla": "KJFK" },
  { vooId: 1, _id: 0 },
  );
