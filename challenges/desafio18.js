db.voos.find({ "passageiros.pagos": { $gt: 7000 } }, {
    vooId: 1,
    _id: 0,
    mes: 1,
    ano: 1,
}).limit(1);