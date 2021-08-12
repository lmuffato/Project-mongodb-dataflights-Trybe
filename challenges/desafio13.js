db.voos.find({ $nor: [
  { "aeroportoDestino.continente": { $eq: "EUROPA" } },
  { "aeroportoDestino.continente": { $eq: "ÁSIA" } },
  { "aeroportoDestino.continente": { $eq: "OCEANIA" } },
] }).count();