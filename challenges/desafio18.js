/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
db.voos.find({ "passageiros.pagos": { $gt: 7000 } }, { vooId: 1, mes: 1, ano: 1, _id: 0 }).limit(1);