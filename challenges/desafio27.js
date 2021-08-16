/* use("dataFlights")
db.voos.count({
  $and: [
    { "empresa.nome": "PASSAREDO" },
    { natureza: "Doméstica" },
  ],
}); */

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { natureza: "Doméstica" },
    ],
  }),
});

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
