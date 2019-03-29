const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
      type: 'String',
      required: true
    },
    subtitle: {
      type: 'String'
    },
    image: { type: 'String' },
    content: { type: 'String' },
  });

module.exports = mongoose.model('Article', ArticleSchema);