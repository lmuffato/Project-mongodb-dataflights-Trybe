const totalVoosDomesticos = db.voos
  .count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos });

db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
