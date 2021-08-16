// Retorne a quantidade de voos da empresa AZUL.
// use("dataFlights")
db.voos.find({ "empresa.nome": "AZUL" }).count();
