db.voos.find({ ano: { $in: [2017, 2018] } }).count();

/* Método alternativo
db.voos.find({
  $and: [
    { "ano": { $gte: 2017 } },
    { "ano": { $lte: 2018 } },
  ]
}).count();
*/
