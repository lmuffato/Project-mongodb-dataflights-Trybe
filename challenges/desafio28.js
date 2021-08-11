const LATAM = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
empresa: LATAM,
totalVoosDomesticos: db.voos.find({ "empresa.nome": LATAM, natureza: "Doméstica" }).count(),
});

db.resumoVoos.find({ empresa: LATAM }, { _id: 0 });
