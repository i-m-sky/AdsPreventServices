
const Razorpay = require('razorpay');

const Subscription_89 = async (req, res) => {
    try {

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const subs = await instance.subscriptions.create({

            plan_id: process.env.RAZORPAY_PLAN_49,
            customer_notify: 1,
            quantity: 1,
            total_count: 1,
            start_at: Math.round((Date.now() / 1000) + 8.64e4),
            addons: [
                {
                  item: {
                    name: "Delivery charges",
                    amount: 49,
                    currency: "USD"
                  }
                }
              ],
            notes: { key1: "value3", key2: "value2" }

        });

        if (!subs) return res.status(500).send("Some error occured");
        return res.status(200).json(subs);

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = Subscription_89;
