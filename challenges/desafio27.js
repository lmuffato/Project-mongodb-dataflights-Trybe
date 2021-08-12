db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }],
  }),
});

db.resumoVoos.findOne({ "empresa.nome": "PASSAREDO" }, { _id: 0 });
