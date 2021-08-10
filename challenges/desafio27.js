// 27 - Retorne a quantidade total de voos de natureza Doméstica que a
// empresa PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.
db.resumoVoos.insertOne({
empresa: "PASSAREDO",
totalVoosDomesticos: db.voos.find({
  $and: [
    { "empresa.nome": { $eq: "PASSAREDO" } },
    { natureza: { $eq: "Doméstica" } }] }).count(),
});
db.resumoVoos.find({ empresa: { $eq: "PASSAREDO" } }, {
empresa: 1,
totalVoosDomesticos: 1,
_id: 0,
});
