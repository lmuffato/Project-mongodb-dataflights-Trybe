// Source: https://github.com/MuriloGon/projects-at-trybe/blob/P25-G3-B23-mongodb-dataflights/challenges/desafio27.js
// O repositório do Murilo me ajudou a ver que poderia salvar o resultado da consulta
// em uma variável.

const totalVoosDomesticos = db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
}).count();

db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos,
});

db.resumoVoos.find({}, { _id: 0 }).limit(1);