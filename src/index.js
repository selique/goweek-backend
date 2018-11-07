// importação depedencia express
const express = require("express");
// importação depedencia mongoose
const mongoose = require("mongoose");
// dependencia cors - libera acessso de outras aplicações fora deste projeto nodejs
const cors = require('cors');
// praticamente instanciando aplicação
const app = express();
// variavel server - retirar o servidor http com express
const server = require('http').Server(app);
// variavel socket - habilitar que o server reconhece protocolo WS e HTTP tbm.
const io = require('socket.io')(server);

// conexão de banco pelo mongoose - framework mongodb
mongoose.connect(
    "mongodb://goweek:goweek123@ds155203.mlab.com:55203/goweek-lucassandin", 
    {
    useNewUrlParser: true
    }
);

// middleware
// variavel ser acessivel em todo o projeto - io para enviar mensagens em tempo real
app.use((req, res, next) => {
    req.io = io;

    // paramêtro para continuar com as próximar requisições sem parar
    return next();
});

// cors
app.use(cors());
// forçando o entendimento de JSON ao EXPRESS
app.use(express.json());

// teste app
// rota raiz
app.use(require('./routes'));

// associando a aplicação à porta 3000 - localhost (express)
server.listen(3000, () => {
    console.log(':) Server started on port 3000');
});