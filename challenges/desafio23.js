db.voos.findOne(
  { $and: [{ litrosCombustivel: { $exists: 1 } }, { litrosCombustivel: { $not: { $gt: 1000 } } }] },
  { vooId: 1, litrosCombustivel: 1, _id: 0 },
);
