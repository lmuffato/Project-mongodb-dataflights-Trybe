db.voos.find({
  litrosCombustivel:
    { $exists: true, $gt: 999 },
},
  { vooId: 1, _id: 0 }).limit(1);