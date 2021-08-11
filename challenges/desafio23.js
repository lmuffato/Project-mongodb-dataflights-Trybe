db.voos.find({ $and: [
  { litrosCombustivel: { $lt: 1000 } },
  { litrosCombustivel: { $exists: true } },
  ] },
  { litrosCombustivel: 1, vooId: 1, _id: 0 }).limit(1);