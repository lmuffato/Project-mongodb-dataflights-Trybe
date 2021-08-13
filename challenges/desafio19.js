db.voos
  .find(
    { litrosCombustivel: { $gt: 0 } },
    {
      _id: 0,
      vooId: 1,
    },
  )
  .limit(1);
