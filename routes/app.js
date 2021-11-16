var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
    res.render('node', {message: 'Olá nova rota de mensagem.'});
});


router.post('/message', function (req, res, next) {
    var messageVar = req.body.messageBody;
    res.redirect('/message/' + messageVar);
})

// " : " indica que esta parte da URL é alguma variavel com dad
router.get('/message/:msgParam', function (req, res, next) { 
    res.render('node', {message: req.params.msgParam});
})

router.post('/message')

router.get('/login', function (req, res, next) {
    res.render('login-inicio');
})

router.get('/login-auth/', function (req, res, next) {
    res.render('logado-inicio');
});



module.exports = router;
