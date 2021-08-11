db.voos.find({}, { vooId: true, _id: false }).limit(3).skip(9);
