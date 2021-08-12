/* 24 - Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que
litrosCombustivel não seja maior do que 600 e a empresa não seja GOL ou AZUL, e o
campo litrosCombustivel exista. */
db.voos.find({
  $and: [
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ] },
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);
