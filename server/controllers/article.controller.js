const Article = require('../models/article.model');

exports.article_create = function (req, res) {
    let article = new Article(
        {
            title: req.body.title,
            subtitle: req.body.subtitle,
            image: req.body.image,
            content: req.body.content
        }
    );

    article.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Article Created successfully')
    })
};

exports.article_details = function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        if (err) return next(err);
        res.send(article);
    })
};

exports.article_update = function (req, res) {
    Article.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, article) {
        if (err) return next(err);
        res.send('Article udpated.');
    });
};

exports.article_delete = function (req, res) {
    Article.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.article_get_articles = function (req, res) {
    Article.find(req.params.id, function (err, docs) {
        if (err) next(err);
      res.status(200).send(docs);
    })
};


