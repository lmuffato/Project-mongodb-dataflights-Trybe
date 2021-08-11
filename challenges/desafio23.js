db.voos.findOne(
  { litrosCombustivel: { $lt: 1000 } },
  { litrosCombustivel: true, vooId: 1, _id: 0 },
);
