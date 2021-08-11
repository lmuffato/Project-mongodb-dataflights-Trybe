db.voos.findOne({ litrosCombustivel: { $not: { $gt: 1000 }, $exists: true } },
{ _id: 0, vooId: 1, litrosCombustivel: 1 });
