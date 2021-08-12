db.voos
  .find(
    { "passageiros.pagos": { $gt: 7000 } },
    { vooId: 1, mes: 1, _id: 0, ano: 1 },
  )
  .sort({ ano: 1 })
  .limit(1);
