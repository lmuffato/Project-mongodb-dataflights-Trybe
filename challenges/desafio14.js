db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIl" } }).count();
