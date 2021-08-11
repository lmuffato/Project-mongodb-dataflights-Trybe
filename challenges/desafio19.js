db.voos.find({ litrosCombustivel: { $exists: true } }, { _id: false, vooId: true }).limit(1);
