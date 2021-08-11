db.voos.find({}, { _id: false, vooId: true }).limit(3).skip(9);
