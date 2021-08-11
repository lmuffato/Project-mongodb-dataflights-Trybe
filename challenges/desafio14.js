db.voos.count({ "aeroportoDestino.pais": { $not: { $eq: "BRASIL" } } });
