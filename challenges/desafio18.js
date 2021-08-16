// challenge 18;

db.voos.findOne({ payload: { $gt: 7000 } }, { vooId: 1, mes: 1, ano: 1, _id: 0 });
