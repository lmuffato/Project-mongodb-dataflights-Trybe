// 8 - Retorne a quantidade de voos em que o ano seja maior do que 2016.
db.voos.count({ ano: { $gt: 2016 } });
