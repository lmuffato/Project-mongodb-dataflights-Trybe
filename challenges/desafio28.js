const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos
    .find({ natureza: "Doméstica", "empresa.nome": empresa })
    .count(),
});

db.resumoVoos
  .find({ empresa }, { _id: 0 })
  .limit(1);