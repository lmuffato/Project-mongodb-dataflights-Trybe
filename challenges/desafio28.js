const nome = "LATAM AIRLINES BRASIL";
db.voos.find({ "empresa.nome": nome, natureza: "Doméstica" }).count();
db.resumeVoos.insertOne({ empresa: nome, totalVoosDomesticos: 20026 });
db.resumeVoos.find({ empresa: nome}, { _id: false });