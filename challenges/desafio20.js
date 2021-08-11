db.voos.findOne({ rtk: { $exists: 0 } }, { vooId: 1, _id: 0 });
