db.voos.count(
  {
    $and: [
      { "empresa.nome": "LATAM AIRLINES BRASIL" },
      { natureza: { $eq: "Doméstica" } },
    ],
  },
  );

db.resumoVoos.insertOne(
  { empresa: "LATAM AIRLINES BRASIL",
   totalVoosDomesticos: 20026 },
);

db.resumoVoos.findOne(
  {}, 
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);
