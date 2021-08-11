db.voos.find({
  empresa: {
    sigla: "AZU",
    nome: "AZUL",
    nacionalidade: "BRASILEIRA",
},
}).count();