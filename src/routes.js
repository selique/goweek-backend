// importando dependencia express
const express = require('express');
// modulo  de rotas do express - variavel
const routes = express.Router();
// importando TweetController 
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

// chamada do app quando acessa nenhum arquivo - pasta raiz
// rota criada - chamando tweetcontroller e suas funções definidas
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
// rota criada - chamando likecontroller e sua função definida
routes.post('/likes/:id', LikeController.store);

// exportar
module.exports = routes;


/**
 * metodos get - buscar informação
 * metodos post - criar novo registro - enviando
 * metodos put - atualizar informação
 * metodos delete - deletar informação
 */