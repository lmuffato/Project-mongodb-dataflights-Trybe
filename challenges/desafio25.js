// use("dataFlights");
// db.voos.find();

db.voos.deleteMany(
  {
  "empresa.nome": "AZUL",
  litrosCombustivel: { $lt: 400 },
  },
);
