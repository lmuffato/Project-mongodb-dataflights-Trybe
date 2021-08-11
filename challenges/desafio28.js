const u = db.voos.find({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: u,
});

db.resumoVoos.find({}, { _id: 0 }).limit(1);
