/**
 * Consultei o repositório do Maycon Felipes para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-mongodb-dataflights/tree/mayconfelipe-mongodb-dataflights
 */
db.voos.find({ vooId: 756807 }, { _id: 0, "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1 });