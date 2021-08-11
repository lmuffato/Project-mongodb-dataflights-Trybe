db.voos.find({
    $and: [
        { "aeroportoDestino.sigla": "KJFK" },
        { "aeroportoOrigem.sigla": "SBGR" },
        { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    ],
}, { _id: 0, vooId: 1 }).limit(1);
