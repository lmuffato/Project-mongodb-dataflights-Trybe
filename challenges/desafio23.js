db.voos.find(
    { $and: [
        { litrosCombustivel: { $exists: true } },
        { litrosCombustivel: { $lte: 1000 } },        
    ] },
    { litrosCombustivel: 1,
      _id: 0,
      vooId: 1,
    },
).limit(1);