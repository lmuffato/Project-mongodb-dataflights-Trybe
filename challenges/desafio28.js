// esse foi ao som de mary go around life
const totalVoosDomesticos = db.voos
  .count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos });

db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
