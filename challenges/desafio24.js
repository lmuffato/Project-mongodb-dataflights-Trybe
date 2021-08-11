db.voos.findOne(
{ litrosCombustivel: { $exists: true, $lt: 600 }, 
"empresa.nome": { $nin: ["GOL", "AZUL"] } }, 
{ _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true },
);
