const queryQuantDeVoos = (empresa) => (
  db.voos.find({ natureza: "Doméstica", "empresa.nome": empresa }, {}).count()
);

const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: LATAM,
  totalVoosDomesticos: queryQuantDeVoos(LATAM),
});

db.resumoVoos.find({ empresa: LATAM }, { _id: 0 });
