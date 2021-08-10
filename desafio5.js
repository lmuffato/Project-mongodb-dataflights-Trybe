// 5 - Retorne o vooId do décimo ao décimo segundo documento da coleção voos.
db.voos.find({}, { _id: 0, vooId: 1 }).limit(3).skip(9);