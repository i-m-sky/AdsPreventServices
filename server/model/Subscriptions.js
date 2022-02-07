const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount:{
        type:Number,
    },
    startDate:{
        type: Date,
        default: Date.now
    },
    lastProcess:{
        type: Date,
    },
    nextPayment:{
        type: Date,
    },
},{timestamps:true});

const Subscription = mongoose.model("Subscription",SubscriptionSchema);

module.exports = Subscription;