// importando dependencia mongoose
const mongoose = require("mongoose");

// criando schema 
const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// exportando arquivo = o que for depois disso é o que quero devolver
module.exports = mongoose.model('Tweet', TweetSchema);