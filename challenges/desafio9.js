// challenge 9;

db.voos.find({ $and: [{ ano: { $gte: 2017, $lte: 2018 } }] }).count();
