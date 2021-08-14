// 5 - Retorne o vooId do décimo ao décimo segundo documento da coleção voos.
db.voos.find({}, { _id: false, vooId: true }).skip(9).limit(3);
