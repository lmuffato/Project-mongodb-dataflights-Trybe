// challenge 6;

db.voos.find(
  { 
    vooId: 756807,
  },
  { vooId: 1, "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1, _id: 0 },
);
