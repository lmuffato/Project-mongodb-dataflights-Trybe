db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos
    .find({ natureza: "Doméstica", "empresa.nome": "PASSAREDO" })
    .count(),
});

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 }).limit(1);
