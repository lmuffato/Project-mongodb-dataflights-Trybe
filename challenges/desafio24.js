db.voos.findOne({'litrosCombustivel': {$lte: 600}, 'empresa.nome': {$ne: ['GOL', 'AZUL']}, 'litrosCombustivel': {$exists: true}}, {'vooId':1, 'empresa.nome':1, 'litrosCombustivel':1});
