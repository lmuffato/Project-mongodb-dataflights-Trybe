const LATAM = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: LATAM,
  totalVoosDomesticos: db.voos.count({ 
    "empresa.nome": LATAM,
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne({ empresa: LATAM }, { _id: 0 });