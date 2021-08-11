db.voos.findOne(
  { $and: [
       { litrosCombustivel: { $exists: true } },
       { litrosCombustivel: { $lte: 1000 } },
     ] },
   { vooId: 1, litrosCombustivel: 1, _id: 0 },
);
