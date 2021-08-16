// challenge 8;

db.voos.find({ ano: { $gt: 2016 } }).count();
