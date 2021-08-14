// use("dataFlights");
// db.voos.find();

db.voos.find(
  { natureza: "Doméstica" },
).count();
