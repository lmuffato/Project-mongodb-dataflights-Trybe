// 15 - Retorne o total de voos com mais de 20 decolagens.

db.voos.count({ decolagens: { $gt: 20 } });
