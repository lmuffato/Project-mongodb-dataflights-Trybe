db.voos.find(
    { $and:
        [
            { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
            { "aeroportoOrigem.sigla": { $eq: "SGBR" } },
            { "aeroportoDestino.sigla": { $eq: "KJFK" } },
        ],
    },
    { vooId: 1 },
);