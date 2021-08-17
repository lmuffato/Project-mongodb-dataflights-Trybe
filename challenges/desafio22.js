/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
db.voos.findOne(
  {
    "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoDestino.sigla": "KJFK",
  },
  { vooId: 1, _id: 0 },
);