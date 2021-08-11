const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: latam,
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": latam,
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.find({ empresa: latam }, { _id: 0 }).limit(1);