const EMPRESA = "PASSAREDO";

const voosDomestico = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": EMPRESA,
});

db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomestico: voosDomestico,
});

db.resumoVoos.findOne({}, {
  _id: 0,
  empresa: 1,
  totalVoosDomestico: 1,
});

// Não tinha certeza como resolver esse problema e dei uma olhada
// nas resoluções dos meus colegas e vi algumas pessoas usando
// variáveis e funções JavaScript e outras usando uma chamada 
// ao banco de dados dentro de outra. Optei por seguir a ideia
// de variável, uma vez que foi pedido no requisito para criar
// algumas queries diferentes e para isso preciso armazenar o valor
// da query de contagem em algum lugar.
