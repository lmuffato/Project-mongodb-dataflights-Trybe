db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });
db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 });
