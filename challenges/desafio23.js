db.voos.find(
  {
    litrosCombustivel : { $lte: 1000, $exists: true },
  },
  {
    vooId: 1,
    _id: 0,
    litrosCombustivel: 1,
  },
).limit(1).pretty();
