// Source: https://github.com/MuriloGon/projects-at-trybe/blob/P25-G3-B23-mongodb-dataflights/challenges/desafio27.js
// O repositório do Murilo me ajudou a ver que poderia salvar o resultado da consulta
// em uma variável.

const totalVoosDomesticos = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
});

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos,
});

db.resumoVoos.find({}, { _id: 0 }).limit(1);