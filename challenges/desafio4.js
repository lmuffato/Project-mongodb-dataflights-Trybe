db.voos.find({
  empresa: {
    sigla: "GLO",
    nome: "GOL",
    nacionalidade: "BRASILEIRA",
  },
}).count();