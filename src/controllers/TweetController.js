// importando model tweet
const Tweet = require('../models/Tweet');

// exportar um objeto daqui desse controller
module.exports = {
    // metodo listagem - assincrono
    async index(req, res) {
        // metodo FIND pertence ao mongoose
        const tweets = await Tweet.find({}).sort('-createdAt');

        return res.json(tweets);
    },

    // metodo create
    async store(req, res) {
        // metodo CREATE pertence ao mongoose
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
};