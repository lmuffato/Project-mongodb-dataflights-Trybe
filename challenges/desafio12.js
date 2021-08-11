db.voos.count({ $or: [
  { "aeroportoDestino.pais": "BRASIL" },
  { "aeroportoDestino.pais": "ARGENTINA" },
  { "aeroportoDestino.pais": "CHILE" },
] });
