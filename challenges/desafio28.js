const latan = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ 
  empresa: latan,
  totalVoosDomesticos: db.voos.count({ "empresa.nome": latan, natureza: "Doméstica" }) });
db.resumoVoos.findOne({ empresa: latan }, { _id: 0 });