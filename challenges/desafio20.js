/* 20 - Retorne o vooId do primeiro voo em que o campo rtk não exista. */
db.voos.find({ rtk: { $exists: false } }, { _id: false, vooId: true }).limit(1);
