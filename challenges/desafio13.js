db.voos.find({ $nor:
  [{ "aeroportoDestino.continente":
  { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } }],
}).count();