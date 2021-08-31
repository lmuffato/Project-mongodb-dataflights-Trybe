db.resumoVoos.insertOne(
  { 
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: 20026,
  },
);

db.resumoVoos.findOne(
  { 
    empresa: "LATAM AIRLINES BRASIL",
    totalVoosDomesticos: { $exists: true },
  },
  { _id: 0 },
);
