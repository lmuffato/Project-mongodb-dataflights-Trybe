db.voos.find({ 
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
  ] }, { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);
