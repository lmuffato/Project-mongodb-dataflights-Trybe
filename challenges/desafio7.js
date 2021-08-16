// challenge 7;

db.voos.find({ ano: { $lt: 2017 } }).count();
