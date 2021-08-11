const nameKey = "litrosCombustivel";
db.voos.findOne(
  { [nameKey]: { $not: { $gt: 1000 } },
    [nameKey]: { $exists: true }, 
  },
  { _id: 0, vooId: 1, [nameKey]: 1 },
);
