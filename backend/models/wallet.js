const mongoose = require('mongoose');


const walletSchema = mongooose.Schema({
 cards: { type: Number, required: true },
 balance: { type: Number, required: true}
});


module.exports = mongoose.model('Wallet', walletSchema);