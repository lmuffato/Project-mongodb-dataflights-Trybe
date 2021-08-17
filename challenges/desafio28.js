const empresa = "LATAM AIRLINES BRASIL";

const totalVoosDomestico = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": empresa,
});

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomestico,
});

db.resumoVoos.findOne({ empresa }, {
  _id: 0,
  empresa: 1,
  totalVoosDomestico: 1,
});
