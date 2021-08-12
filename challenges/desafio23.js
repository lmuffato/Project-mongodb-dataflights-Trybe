db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $not: { $gt: 1000 } } },
    ],
  },
  { _id: 0, vooId: 1, litrosCombustivel: 1 },
);
