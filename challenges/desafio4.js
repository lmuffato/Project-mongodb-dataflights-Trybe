// Retorne a quantidade de voos da empresa GOL.
// use("dataFlights")
db.voos.find({ "empresa.nome": "GOL" }).count();
