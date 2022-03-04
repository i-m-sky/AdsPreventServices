const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        default: 0
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    lastProcess: {
        type: Date,
    },
    nextPayment: {
        type: Date,
    },
    status:{
        type:Boolean,
    }
}, { timestamps: true });

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;