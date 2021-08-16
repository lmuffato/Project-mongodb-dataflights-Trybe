// use("dataFlights")
db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }).limit(10).count();
