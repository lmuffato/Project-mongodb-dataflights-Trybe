db.voos.count({
  "aeroportoDestino.pais": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] },
});
