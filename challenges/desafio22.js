db.voos.findOne(
  {
    $and: [
      {
        $or: [
          { "empresa.nome": /DELTA AIRLINES/i },
          { "empresa.nome": /AMERICAN AIRLINES/i },
        ],
      },
      { "aeroportoOrigem.sigla": /SBGR/i },
      { "aeroportoDestino.sigla": /KJFK/i },
    ],
  },
  { vooId: 1, _id: 0 },
);
