db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find({
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  }).count(),
});

db.resumoVoos.find({}, { _id: 0 });
