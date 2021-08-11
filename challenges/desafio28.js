const Latam = "LATAM AIRLINES BRASIL";
const voosDomesticosLatam = db.voos.count({
  "empresa.nome": Latam,
    natureza: "Doméstica",
  });

db.resumoVoos.insertOne({
    empresa: Latam,
    totalVoosDomesticos: voosDomesticosLatam,
  });

db.resumoVoos.findOne({ empresa: Latam },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  });
