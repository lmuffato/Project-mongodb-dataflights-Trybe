// 27 - Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui,
// via uso de uma nova coleção chamada resumoVoos.

db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
