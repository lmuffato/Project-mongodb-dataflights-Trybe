// use("dataFlights");
// db.voos.find();

db.voos.find(
  { natureza: "Internacional" },
).count();
