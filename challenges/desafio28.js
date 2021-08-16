/* use("dataFlights")
db.voos.count({
  $and: [
    { "empresa.nome": "LATAM AIRLINES BRASIL" },
    { natureza: "Doméstica" },
  ],
}); */
const empresaDataFlight = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: empresaDataFlight,
  totalVoosDomesticos: db.voos.count({
    $and: [
      { "empresa.nome": empresaDataFlight },
      { natureza: "Doméstica" },
    ],
  }),
});

db.resumoVoos.findOne(
  { empresa: empresaDataFlight },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
