db.voos.findOne(
  { rtk: { $not: { $exists: true } } },
  { _id: 0, vooId: 1 },
);
