db.voos.findOne({ litrosCombustivel: { $gt: 1000 } }, { _id: 0, vooId: 1 });
