// 5 - Retorne o vooId do décimo ao décimo segundo documento da coleção voos.

db.voos.find({}, { vooId: 1 }).limit(2).skip(10);
