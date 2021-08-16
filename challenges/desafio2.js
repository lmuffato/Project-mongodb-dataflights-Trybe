// challenge 2;

db.voos.find({ "empresa.nome": "AZUL" }).limit(10);
