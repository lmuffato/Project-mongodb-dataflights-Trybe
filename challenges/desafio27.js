const queryQuantDeVoos = (empresa) => (
  db.voos.find({ natureza: "Doméstica", "empresa.nome": empresa }, {}).count()
);

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: queryQuantDeVoos("PASSAREDO"),
});

db.resumoVoos.find({}, { _id: 0 });