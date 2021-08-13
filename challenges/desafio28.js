// Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.find({
    $and: [{ "empresa.sigla": "TAM" }, { natureza: "Doméstica" }] }).count(),
});

db.resumoVoos.find({}, { _id: 0 });
