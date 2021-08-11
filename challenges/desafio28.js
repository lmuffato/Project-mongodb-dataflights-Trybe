const enterprise = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: enterprise,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": enterprise,
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.find({
  empresa: enterprise,
}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });