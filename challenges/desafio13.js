// 13 - Retorne a quantidade de documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
// nin => não contém nenhum igual a algum elemento do array.
db.voos.count({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } });