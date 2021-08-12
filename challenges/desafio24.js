db.voos.find({
  $and: [
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ] },
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);
