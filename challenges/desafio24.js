/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
db.voos.findOne(
  {
    litrosCombustivel: { $exists: true, $lt: 600 },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { "empresa.nome": 1, litrosCombustivel: 1, vooId: 1, _id: 0 },
);