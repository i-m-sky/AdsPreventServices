const GoogleCampaign = require("../../model/GoogleCampaign");

const GetCampaigns = async (req, res) => {
    try {
        const GoogleAdsId = req.body.GoogleAdsId;
        if (!GoogleAdsId) {
            return res.json('Google ads id required in body');
        }
        const campaigns = await GoogleCampaign.find({ GoogleAdId: GoogleAdsId }, { campaign: 1 })
        return res.status(200).json({ status: true, campaigns });
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = GetCampaigns;