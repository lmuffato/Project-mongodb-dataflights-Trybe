// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa
// LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
const LATAM_AIRLINES = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: LATAM_AIRLINES,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": LATAM_AIRLINES,
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne({
  empresa: LATAM_AIRLINES,
}, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
