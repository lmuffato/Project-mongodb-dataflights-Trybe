db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO", totalVoosDomesticos: 4187,
  },
);

db.resumoVoos.findOne(
  {
    empresa: "PASSAREDO",
  },
  {
    _id: 0,
  },
);
