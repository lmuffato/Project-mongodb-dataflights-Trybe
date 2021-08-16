// challenge 4;

db.voos.find({ "empresa.nome": "GOL" }).count();
