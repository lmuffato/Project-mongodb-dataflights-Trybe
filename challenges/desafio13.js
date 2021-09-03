db.voos.find(
    { "aeroportoDestino.continente": { $ne: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } },
).count();
