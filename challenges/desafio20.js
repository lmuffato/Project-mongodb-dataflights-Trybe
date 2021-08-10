db.voos.find({'rtk': {$exists: false}}, {'vooId':1}).limit(1);
