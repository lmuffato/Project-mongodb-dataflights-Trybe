// 20 - Retorne o vooId do primeiro voo em que o campo rtk não exista.
db.voos.find({ rtk: { $exists: false } }, { _id: 0, vooId: 1 }).limit(1);