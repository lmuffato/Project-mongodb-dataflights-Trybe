db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count();
db.resumeVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });
db.resumeVoos.find({ empresa: "PASSAREDO" }, { _id: false });