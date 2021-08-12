db.voos.find({ rtk: { $exists: false } }, { _id: false, vooId: true }).limit(1);
