db.voos.find({ rtk: { $not: { $exists: true } } }, { vooId: 1, 
  _id: 0 }).limit(1);