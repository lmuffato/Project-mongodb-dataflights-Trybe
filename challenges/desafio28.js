const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
empresa: empresa,
totalVoosDomesticos: db.voos.find({ "empresa.nome": empresa, natureza: "Doméstica" }).count()
});

db.resumoVoos.find({ empresa: empresa }, {_id: 0 });
