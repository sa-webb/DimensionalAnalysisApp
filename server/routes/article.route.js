const express = require('express');
const router = express.Router();
const Articles = require('../models/article.model');
const article_controller = require('../controllers/article.controller');

router.post('/create', article_controller.article_create);

router.get('/:id', article_controller.article_details);

router.put('/:id/update', article_controller.article_update);

router.delete('/:id/delete', article_controller.article_delete);

router.get('/', async (req, res) => {
  const articles = await Articles.find({});
  res.json( { articles } );
});

module.exports = router;