db.voos.count(
  { "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } },
  );

// https://docs.mongodb.com/manual/reference/operator/aggregation/
