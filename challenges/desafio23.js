db.voos.find({
  $and: [
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 1000 } },
  ],
},
{ _id: false, vooId: true, litrosCombustivel: true }).limit(1);
