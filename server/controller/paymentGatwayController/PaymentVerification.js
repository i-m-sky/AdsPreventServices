const crypto = require('crypto')

const PaymentVerification = (req, res) => {
    try {
        
        const crypt = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET);

        const digest = crypt.update(req.body.data.razorpay_payment_id + '|' + req.body.data.razorpay_subscription_id).digest('hex')

        if (digest === req.body.data.razorpaySignature) {
            
            return res.status(200).json({ status: true, message: "Payment success" });

        } else {
    
            return res.status(200).json({ status: false, message: "Payment Faild" });

        }
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = PaymentVerification;