db.voos.findOne(
  { litrosCombustivel: { $not: { $gt: 1000 }, $exists: true } },
  { vooId: 1, litrosCombustivel: 1, _id: false },
);
