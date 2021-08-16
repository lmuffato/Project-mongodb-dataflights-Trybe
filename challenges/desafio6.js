db.voos.find(
    { vooId: 756807 }, 
    { "empresa.sigla": 1, passageiros: 1, _id: 0 },
);
