const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ empresa: LATAM,
totalVoosDomesticos: db.voos.find({ "empresa.nome": LATAM,
natureza: "Doméstica" }).count() });

db.resumoVoos.findOne({ empresa: LATAM }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
