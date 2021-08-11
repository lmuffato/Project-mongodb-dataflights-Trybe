db.voos.find({ 
  $and: [
    { ano: { $gte: 2017 } }, 
    { ano: { $lte: 2018 } },
  ],
}).count();
