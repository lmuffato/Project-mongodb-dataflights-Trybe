const EMPRESA = "LATAM AIRLINES BRASIL";

const voosDomesticos = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": EMPRESA,
});

db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos: voosDomesticos,
});

db.resumoVoos.findOne({}, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});
