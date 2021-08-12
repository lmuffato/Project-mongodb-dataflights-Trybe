// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
const LATAM = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
    { 
      empresa: LATAM,
      totalVoosDomesticos: db.voos
      .find({ "empresa.nome": LATAM, natureza: "Doméstica" }).count(),
    },
  );
  db.resumoVoos.find(
    { empresa: LATAM }, { empresa: 1,
      totalVoosDomesticos: 1,
_id: 0 },
).limit(1);