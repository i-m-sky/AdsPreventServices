
const Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'rzp_test_Aw3UkZrWcikglg',
  key_secret: 'BMNui8yzir3ezeesuA9vsC51',
});

const Order = (req,res) =>{
    try {
        let option = {
            amount:50000,
            currency:'INR'
        }

        Razorpay.orders.create((err,order)=>{
            console.log(order)
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = Order;