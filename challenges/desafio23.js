db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $lt: 1000 } },
      { litrosCombustivel: { $exists: 1 } },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
  },
);