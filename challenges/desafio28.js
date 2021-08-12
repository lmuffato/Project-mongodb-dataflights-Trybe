const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert(
    { empresa: latam,
    totalVoosDomesticos: db.voos.find({
        "empresa.nome": latam, 
        natureza: "Doméstica",
    }).count(),
},
);

db.resumoVoos.find({ empresa: latam },
    { empresa: 1, totalVoosDomesticos: 1, _id: 0,
    }).limit(1);