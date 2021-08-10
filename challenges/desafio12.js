// 12 - Retorne a quantidade de documentos em que o campo aeroportoDestino.pais
// seja igual a BRASIL, ARGENTINA ou CHILE.
db.voos.find({
$or: [{ "aeroportoDestino.pais": { $eq: "BRASIL" } },
{ "aeroportoDestino.pais": { $eq: "ARGENTINA" } },
{ "aeroportoDestino.pais": { $eq: "CHILE" } }] }).count();
