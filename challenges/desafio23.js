db.voos.findOne({ $and: [
  { litrosCombustivel: { $lt: 1000 } },
  { litrosCombustivel: { $exists: true } },
  ] }, { litrosCombustivel: true, vooId: true, _id: false,
});
