db.voos.find({
    "empresa.nome": { $in: ["AMERICAN AIRLINES", "DELTA AIRLINES"] } },
    { _id: 0, vooId: 1 }).sort({ vooId: 1 }).limit(1);