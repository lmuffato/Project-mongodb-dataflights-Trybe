/* 6 - Retorne apenas os campos empresa.sigla, empresa.nome e passageiros
do voo com o campo vooId igual a 756807. */
db.voos.find({
  vooId: {
    $eq: 756807 } },
    {
    _id: false,
    "empresa.sigla": true,
    "empresa.nome": true,
    passageiros: true,
});
