db.voos.findOne(
{ litrosCombustivel: { $lt: 600, $exists: 1 },
"empresa.nome": { $nin: ["GOL", "AZUL"] },
},
{ vooId: 1, litrosCombustivel: 1, "empresa.nome": 1, _id: 0 },
);
