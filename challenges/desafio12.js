db.voos.find({
  $or: [{
    "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] },
  }],
}).count();