// 10 - Retorne apenas os 10 primeiros documentos com voos da empresa GOL
// do ano de 2017. Exiba apenas os campos vooId, empresa.nome, aeroportoOrigem.nome,
// aeroportoDestino.nome, mes e ano.
// use("dataFlights")
db.voos.find({}).limit(10);
