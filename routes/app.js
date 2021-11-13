var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
    res.render('node', {message: 'Olá nova rota de mensagem.'});
});

module.exports = router;
