db.voos.find(
  { $and: [
    { "aeroportoDestino.continente": { $ne: "EUROPA" } }, 
    { "aeroportoDestino.continente": { $ne: "ÁSIA" } },
    { "aeroportoDestino.continente": { $ne: "OCEANIA" } },
  ] },
  ).count();