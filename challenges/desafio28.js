const EMPRESA_NOME = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
    empresa: EMPRESA_NOME,
    totalVoosDomesticos: db.voos.find({
        natureza: "Doméstica",
        "empresa.nome": "LATAM AIRLINES BRASIL",
    }).count(),
});

db.resumoVoos.find({ empresa: EMPRESA_NOME }, { _id: 0 });
