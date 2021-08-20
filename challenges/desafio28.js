db.resumoVoos.insert({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: 20026 });
db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" },
   { empresa: 1, _id: 0, totalVoosDomesticos: 1 },
   );
