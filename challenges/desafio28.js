const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": empresa,
    natureza: "Domestica",
  }),
});

db.resumoVoos.findOne(
  { empresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
