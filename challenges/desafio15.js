// challenge 15;

db.voos.find({ decolagens: { $gt: 20 } }).count();
