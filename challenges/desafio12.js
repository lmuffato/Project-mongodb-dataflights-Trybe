// db.voos.find({
//   $or: [
//     { "aeroportoDestino.pais": "BRASIL" },
//     { "aeroportoDestino.pais": "ARGENTINA" },
//     { "aeroportoDestino.pais": "CHILE" },
//   ],
// }).count();

db.voos.find({
  "aeroportoDestino.pais": {
    $in: ["BRASIL", "ARGENTINA", "CHILE"], 
  },
}).count();
