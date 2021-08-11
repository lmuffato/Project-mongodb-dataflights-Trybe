// 22 - Retorne o vooId do primeiro voo em que a empresa seja DELTA AIRLINES ou AMERICAN AIRLINES, a sigla do aeroporto de origem seja SBGR e a sigla do aeroporto de destino seja KJFK.
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

  // Dica de Anderson Nasimento tumra 10A