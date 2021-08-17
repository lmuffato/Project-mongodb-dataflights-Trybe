/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
db.voos.find(
  { "empresa.nome": "GOL", ano: 2017 },
  { 
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    "aeroportoOrigem.nome": 1,
    "aeroportoDestino.nome": 1,
    mes: 1,
    ano: 1,
  },
).limit(10);