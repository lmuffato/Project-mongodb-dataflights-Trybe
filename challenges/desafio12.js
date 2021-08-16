// challenge 12;

db.voos.find(
  {
    $or: [
      { "aeroportoDestino.pais": { $eq: "BRASIL" } },
      { "aeroportoDestino.pais": { $eq: "CHILE" } },
      { "aeroportoDestino.pais": { $eq: "ARGENTINA" } },
    ],
    },
).count();
