db.voos.find({ pais: { $not: { $eq: "BRASIL" } } }).count();
