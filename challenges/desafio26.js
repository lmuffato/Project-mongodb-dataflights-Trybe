// use("dataFlights");
// db.voos.find();

db.voos.deleteMany(
  {
  "empresa.nome": "GOL",
  "passageiros.pagos": { $gte: 5, $lte: 10 },
  },
);
