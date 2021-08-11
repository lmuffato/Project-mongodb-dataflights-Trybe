db.voos.find({ "aeroportoDestino.pais": { $not: { $eq: "BRASIL" } } });
