const nomeEmpresa = "LATAM AIRLINES BRASIL"; 

db.resumoVoos.insertOne({
    empresa: nomeEmpresa,
    totalVoosDomesticos: db.voos.find(
        { natureza: "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" },
    ).count(),
});

db.resumoVoos.find({ empresa: nomeEmpresa }, { _id: 0 }).limit(1);