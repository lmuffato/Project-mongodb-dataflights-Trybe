db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({ $and: [
  { "empresa.nome": "PASSAREDO" }, 
  { natureza: "Doméstica" }] }),
});

db.resumoVoos.find({ empresa: "PASSAREDO" },
{ empresa: 1, totalVoosDomesticos: 1, _id: 0 });
