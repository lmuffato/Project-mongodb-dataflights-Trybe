// 13 - Retorne a quantidade de documentos em que o campo
// aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
db.voos.find({
$nor: [
{ "aeroportoDestino.continente": { $eq: "EUROPA" } },
{ "aeroportoDestino.continente": { $eq: "ÁSIA" } },
{ "aeroportoDestino.continente": { $eq: "OCEANIA" } }] }).count();

// nor: nem X, nem Y
