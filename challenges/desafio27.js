const u = db.voos.find({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
}).count();

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: u,
});

db.resumoVoos.find({}, { _id: 0 }).limit(1);
