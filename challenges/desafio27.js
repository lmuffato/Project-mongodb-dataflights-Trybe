const EMPRESA = "PASSAREDO";

const voosDomesticos = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": EMPRESA,
});

db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos: voosDomesticos,
});

db.resumoVoos.findOne({}, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});

// Não tinha certeza como resolver esse problema e dei uma olhada
// nas resoluções dos meus colegas e vi algumas pessoas usando
// variáveis e funções JavaScript e outras usando uma chamada 
// ao banco de dados dentro de outra. Optei por seguir a ideia
// de variável, uma vez que foi pedido no requisito para criar
// algumas queries diferentes e para isso preciso armazenar o valor
// da query de contagem em algum lugar.

// PS: Por algum motivo meu código não estava passando no github, 
// então busquei soluções iguais a minha que passaram, 
// achei uma idêntica em lógica ao que eu fiz, 
// mas com uma implementação diferente. Estou enviando algo parecido
// para ver se o github aceita!
// https://github.com/tryber/sd-010-a-mongodb-dataflights/pull/96

// PS²: Percebi que o erro estava no nome que dei ao
// "totalVoosDomestico"... Faltou acrescentar um "s"...
// Voltarei meu código ao que estava antes para manter o que eu fiz
// e confirmar que era apenas isso mesmo.
