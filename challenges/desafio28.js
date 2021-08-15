// use("dataFlights");
// db.voos.find();

// db.voos.find(
//   {
//     "empresa.nome": "LATAM AIRLINES BRASIL",
//     natureza: "Doméstica"
//   }
// ).count();
// result = 20026

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
