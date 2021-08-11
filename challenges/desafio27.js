db.resumoVoos
  .insertOne({
    empresa: "PASSAREDO", totalVoosDomesticos: db.voos.count({ "empresa.nome": "PASSAREDO" }) });
db.resumoVoos.findOne({}, { _id: 0 });