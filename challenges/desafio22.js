db.voos.findOne({ 
  $and: [
    {
      "aeroportoOrigem.sigla": /sbgr/gi,
      "aeroportoDestino.sigla": /kjfk/gi,
    },
    { 
      $or: [
        { "empresa.nome": /delta airlines/gi }, 
        { "empresa.nome": /american airlines/gi },
      ],
    },
  ] },
  { _id: 0, vooId: 1 });
