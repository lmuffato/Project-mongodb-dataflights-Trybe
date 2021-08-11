db.voos.find({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" }).count();
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: 20026 });
db.resumoVoos.find({}, { _id: 0 }).limit(1);
