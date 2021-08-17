/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
db.voos.findOne(
  {
    litrosCombustivel: { $lt: 1000, $exists: true },
  },
  { vooId: 1, _id: 0, litrosCombustivel: 1 },
);