db.voos.findOne({ litrosCombustivel: { $exists: true, $gte: 1000 } }, { _id: 0, vooId: 1 });
