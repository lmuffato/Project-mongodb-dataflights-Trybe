db.voos.findOne(
  {
    litrosCombustivel: { $exists: 1, $lte: 1000 },
  },
  {
    vooId: 1,
    litrosCombustivel: 1,
    _id: 0,
  },
);
