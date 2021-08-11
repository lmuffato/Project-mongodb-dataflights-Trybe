db.voos
  .find(
    { litrosCombustivel: { $exists: true, $not: { $gt: 1000 } } },
    { _id: 0, vooId: 1, litrosCombustivel: 1 },
  )
  .limit(1);
