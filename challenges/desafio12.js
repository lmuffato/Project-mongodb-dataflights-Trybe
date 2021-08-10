db.voos.count(
  { "aeroportoDestino.pais": 
  { $in: ["BRASIL", "ÁSIA", "OCEANIA"] } },
  );
