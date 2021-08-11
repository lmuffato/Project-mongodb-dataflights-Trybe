db.voos.find({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" }).count();
db.resumeVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: 20026 });
db.resumeVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: false });