db.voos.find({
  empresa: {
    sigla: "AZU",
    nome: "AZUL",
    nacionalidade: "BRASILEIRA",
},
}).limit(10).pretty();