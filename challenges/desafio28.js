const Empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: Empresa,
  totalVoosDomesticos: db.voos.count({
    $and: [
      { "empresa.nome": Empresa },
      { natureza: "Doméstica" },
    ],
  }),
});

db.resumoVoos.findOne(
  { empresa: Empresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
