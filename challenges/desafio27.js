const nomeEmpresa = "PASSAREDO";

const qtdVoos = db.voos.find({
    $and: [
        { natureza: "Doméstica" },
        { "empresa.nome": nomeEmpresa },
    ],
}).count();

db.resumoVoos.insertOne({
    empresa: nomeEmpresa,
    totalVoosDomesticos: qtdVoos,
});

db.resumoVoos.find({ empresa: nomeEmpresa }, { _id: 0 });
