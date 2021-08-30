db.voos.find(
    {
        vooId: { $eq: 756807 } }, { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1, vooId: 0,
    },
);