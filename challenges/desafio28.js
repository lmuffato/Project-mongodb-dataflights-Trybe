const EMPRESA = "LATAM AIRLINES BRASIL";

const voosDomestico = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": EMPRESA,
});

db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomestico: voosDomestico,
});

db.resumoVoos.findOne({}, {
  _id: 0,
  empresa: 1,
  totalVoosDomestico: 1,
});
