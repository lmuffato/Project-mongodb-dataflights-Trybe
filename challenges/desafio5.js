// challenge 5;
// https://qastack.com.br/programming/25589113/how-to-select-a-single-field-for-all-documents-in-a-mongodb-collection

db.voos.find({}, { vooId: 1, _id: 0 }).limit(3).skip(9);
