// 13 - Retorne a quantidade de documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
db.voos.count({
  $nor: [
    {
    "aeroportoDestino.continente": "EUROPA",
    },
    {
      "aeroportoDestino.continente": "ÁSIA",
    },
    {
      "aeroportoDestino.continente": "OCEANIA",
    },
  ],
});