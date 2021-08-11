db.voos.find(
  { $and: [{ litrosCombustivel: { $lt: 1000 } }, { litrosCombustivel: { $exists: 1 } }] }, 
  { vooId: 1, litrosCombustivel: 1, _id: 0 },
  ).limit(1); 