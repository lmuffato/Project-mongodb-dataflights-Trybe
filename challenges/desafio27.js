db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    $and: [{ "empresa.nome": "PASSAREDO" }, { natureza: "Doméstica" }],
  }),
});

db.resumoVoos.findOne({}, { _id: 0 });
