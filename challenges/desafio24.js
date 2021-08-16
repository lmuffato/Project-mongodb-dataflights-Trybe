db.voos.findOne({
  "empresa.nome": { $nin: ["GOL", "AZUL"] },
  litrosCombustivel: { 
    $exists: true, 
    $not: { $gt: 600 },
  },
}, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
