db.voos.find({ "aeroportoDestino.pais": { $nin: ["ESTADOS UNIDOS"] } }).count();
