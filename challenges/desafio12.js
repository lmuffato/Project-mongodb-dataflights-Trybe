// use("dataFlights");
// db.voos.find();

db.voos.find(
  { "aeroportoDestino.pais": {
    $in: ["BRASIL", "ARGENTINA", "CHILE"] } },
  ).count();
