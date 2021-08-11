// 9 - Retorne a quantidade de voos entre os anos de 2017 e 2018.
db.voos.count({ 
  $and: 
  [
    { ano: { $gte: 2017 } }, { ano: { $lte: 2018 } },
  ],
});
