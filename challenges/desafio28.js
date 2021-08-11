const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos.count({
    natureza: "Doméstica",
    "empresa.nome": empresa,
  }),
});

db.resumoVoos.find({
  empresa,
}, { _id: 0 })
.limit(1);