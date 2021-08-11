const empresa = "LATAM AIRLINES BRASIL";

const totalVoosDomesticos = db.voos.count({ 
  "empresa.nome": empresa,
  natureza: "Doméstica",
}, {});

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos });

db.resumoVoos.findOne({ empresa }, { 
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});
