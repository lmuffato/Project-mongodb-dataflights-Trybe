db.voos.findOne(
  { litrosCombustivel: { $not: { $exists: true } } },
  { _id: 0, vooId: 1 },
);
