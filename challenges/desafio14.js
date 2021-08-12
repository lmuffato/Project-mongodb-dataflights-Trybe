db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRAZIl" } }).count();
