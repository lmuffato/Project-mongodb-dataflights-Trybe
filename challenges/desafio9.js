db.voos.find({ ano: { $gt: 2016, $lte: 2018 } }).count();
