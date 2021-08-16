// challenge 14;

db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }).count();
