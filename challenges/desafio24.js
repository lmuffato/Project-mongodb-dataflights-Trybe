db.voos.findOne(
  { $and: [
       { litrosCombustivel: { $exists: true } },
       { litrosCombustivel: { $lte: 600 } },
       { $or: [
         { "empresa.nome": { $ne: "GOL" } },
         { "empresa.nome": { $ne: "azul" } },
       ] },  
     ] },
   {
     vooId: 1,
    "empresa.nome": 1,
     litrosCombustivel: 1,
    _id: 0 },
);
