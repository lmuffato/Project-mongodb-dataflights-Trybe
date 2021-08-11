db.voos.find({ $and: [
  { litrosCombustivel: { $exists: true } },
  { litrosCombustivel: { $lt: 1000 } },
] }, { _id: 0, vooId: 1, litrosCombustivel: 1 })
.limit(1);
