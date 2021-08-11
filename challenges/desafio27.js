db.voos.count(
  {
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { natureza: { $eq: "Doméstica" } },
    ],
  },
  );

db.resumoVoos.insertOne(
  { empresa: "PASSAREDO",
   totalVoosDomesticos: 4187 },
);

db.resumoVoos.findOne(
  {}, 
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);