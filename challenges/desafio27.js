const empresa = "PASSAREDO";

const totalVoosDomesticos = db.voos.count(
  { "empresa.nome": empresa, natureza: "Doméstica" },
);

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos });

db.resumoVoos.findOne({ empresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
