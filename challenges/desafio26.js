const paidPassengersKey = "passageiros.pagos";
const companyNameKey = "empresa.nome";
db.voos.deleteMany({ [companyNameKey]: /^gol/gi, [paidPassengersKey]: { $gte: 5, $lte: 10 } });
