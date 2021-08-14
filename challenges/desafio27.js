// 27 - Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: 4187 });

db.resumoVoos.find({}, { _id: false });
