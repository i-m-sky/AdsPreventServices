const Razorpay = require('razorpay');

const CreatePlans = async (req, res) => {

    try {
        const instance = new Razorpay({
            key_id: "rzp_test_SCjWaFjLaNNGXt",
            key_secret: "zFbGgU4q3p2Enxjqm7im8pxO"
        })

        const plans = await instance.plans.create({
            period: "monthly",
            interval: 1,
            item: { name: "Standard", amount: 49, currency: "USD", description: "Protect 1 Platform Goolge Ads or Facebook Ads" },
            notes: { service1: "Protection for multiple domains", service2: "AdsPrevent AI detection algorithm", service3: "Session recordings and analysis", service4: "Session recordings and analysis" }
        })


        if(!plans) {
            return res.status(401).json("opps something went wrong")
        }

        return res.status(200).json(plans)


    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = CreatePlans;