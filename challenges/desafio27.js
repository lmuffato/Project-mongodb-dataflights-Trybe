db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count();
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });
db.resumoVoos.find({}, { _id: 0 }).limit(1);