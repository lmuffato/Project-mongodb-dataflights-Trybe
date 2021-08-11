const litersFuelKey = "litrosCombustivel";
const companyNameKey = "empresa.nome";

db.voos.findOne(
  {
    $and: [
      { [litersFuelKey]: { $not: { $gt: 600 } } },
      { [litersFuelKey]: { $exists: true } },
      { [companyNameKey]: { $nin: [/^gol/gi, /^azul/gi] } },
    ],
  },
  { _id: 0, vooId: 1, [companyNameKey]: 1, [litersFuelKey]: 1 },
);
