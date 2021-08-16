db.voos.find(
  { vooId: 756807 }, { "empresa.sigla": 1, "empresa.nome": 2, passageiros: 1, _id: false },
);
