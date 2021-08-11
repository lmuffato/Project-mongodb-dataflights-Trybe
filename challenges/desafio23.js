db.voos.find({ 
litrosCombustivel: { $lte: 1000, $exists: true }}, 
{ vooId: 1, litrosCombustivel: 1, _id: 0 }).limit(1);
