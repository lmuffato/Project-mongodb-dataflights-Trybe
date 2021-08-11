const empresa = "PASSAREDO";

const totalVoosDomesticos = db.voos.countDocuments({ 
  "empresa.nome": empresa,
  natureza: "Doméstica",
}, {});

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos });
db.resumoVoos.findOne({ empresa }, { 
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});