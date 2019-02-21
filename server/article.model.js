const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    name: {
      type: 'String',
      required: true
    },
    price: {
      type: Number
    },
    identifyBy: { type: 'String' },
    description: { type: 'String' },
  });

module.exports = mongoose.model('Article', ArticleSchema);