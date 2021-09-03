db.voos.findOne(
  {
    litrosCombustivel: { $exists: 1 },
  },
  {
    vooId: 1,
    _id: 0,
  },
);
