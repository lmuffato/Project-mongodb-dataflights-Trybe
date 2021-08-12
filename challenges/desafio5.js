/* 5 - Retorne o vooId do décimo ao décimo segundo documento da coleção voos. */
db.voos.find({}, {
  vooId: true,
  _id: false,
}).skip(9).limit(3);
