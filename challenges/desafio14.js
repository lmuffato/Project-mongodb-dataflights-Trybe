// use("dataFlights");
// db.voos.find();

db.voos.find(
  { "aeroportoOrigem.pais": { $ne: "BRASIL" } },
).count();
