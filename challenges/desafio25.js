const litersFuelKey = "litrosCombustivel";
const companyNameKey = "empresa.nome";
db.voos.deleteMany({ [companyNameKey]: /^azul/gi, [litersFuelKey]: { $lt: 400 } });
