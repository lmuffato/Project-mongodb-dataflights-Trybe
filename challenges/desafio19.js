/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
db.voos.findOne({ litrosCombustivel: { $exists: true } }, { _id: 0, vooId: 1 });