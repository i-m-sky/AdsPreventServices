const crypto = require('crypto')

const PaymentVerification = (req, res) => {
    try {
        const {razorpay_payment_id,razorpay_subscription_id,razorpay_signature} = req.body;

        const crypt = crypto.createHmac('sha256', razorpay.key_secret)

        crypt.update( razorpay_payment_id+ '|' + razorpay_subscription_id)

        const digest = digest('hex');
        
        if (digest === razorpay_signature) {
            console.log('request is legit')
            return res.status(200).json({status:true,message:"Payment success"});
            
        } else {
            console.log('request is not legit')
            return res.status(200).json({status:false,message:"Payment Faild"});
            
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = PaymentVerification;