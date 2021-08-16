// challenge 13;

db.voos.find(
  {
    $and: [
      { "aeroportoDestino.continente": { $ne: "OCEANIA" } },
      { "aeroportoDestino.continente": { $ne: "ÁSIA" } },
      { "aeroportoDestino.continente": { $ne: "EUROPA" } },
    ],
    },
).count();
