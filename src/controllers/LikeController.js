// importando models
const Tweet = require('../models/Tweet');

module.exports = {
    // metodo create like
    async store(req, res) {
        // instanciando tweet e chamando o valor do id que foi 
        // passado por parâmentro na rota
        const tweet = await Tweet.findById(req.params.id);

        // setando mais um like no LIKE que já existia +1
        tweet.set({ likes: tweet.likes + 1 });

        // salvando operação
        await tweet.save();

        req.io.emit("like", tweet);

        // retornando o tweet em json
        return res.json(tweet);
    },
}