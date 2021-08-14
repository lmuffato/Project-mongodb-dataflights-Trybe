db.voos.find({}, { vooId: 1, _id: 0 }).limit(3).skip(9);
// como quero retornar apenas um atributo, uso o segundo parametro do find e especificamente não pego o id pois ele vem automaticamente
