db.voos.count(
  { "aeroportoDestino.continente": { $not: { $eq: "EUROPA", "ÁSIA", "OCEANIA" } } });