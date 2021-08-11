db.resumoVoos.insert(
  {
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: 20026,
  },
);

db.resumoVoos.find(
  { empresa: "LATAM AIRLINES BRASIL" },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
