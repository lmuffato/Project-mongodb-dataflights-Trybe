db.voos.findOne(
{ "passageiros.pagos": { $gt: 700 } }, 
{ _id: false, vooId: true, mes: true, ano: true },
);
