db.voos.findOne({ $and: [{ litrosCombustivel: { $lte: 1000 } },
  { litrosCombustivel: { $exists: true } }] },
    { _id: 0,
    vooId: 1,
    litrosCombustivel: 1 });
