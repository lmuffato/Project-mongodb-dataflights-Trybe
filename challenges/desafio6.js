db.voos.find(
    {
        vooId: { $eq: 756897 } }, { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1,
    },
);