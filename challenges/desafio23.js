db.voos.findOne({ litrosCombustivel: { $exists: true, $lte: 1000 } }, 
  { _id: 0, vooId: 1, litrosCombustivel: 1 });