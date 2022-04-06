
const Campaignreport = require("../../model/Campaign-Report");
const CampaignReportSummary = require("../../model/Campaign-Report-Summary")

const Receiveclietdata = async (req, res) => {
    try {
        const { client, gcid, gclid, utm_campaign } = req.body
    
        if (gclid || utm_campaign) {
            const createuser = new Campaignreport({ campaignId: gcid, ip: client.IPv4,geolocation:client });

            const result = await createuser.save();

            const campReport = await CampaignReportSummary.findOne({ $and: [{ campaignId: gcid }, { ip: client.IPv4 }] });
        
            if (campReport) {
                if (campReport['ip'] != `${client.IPv4}`) {
                    await CampaignReportSummary.updateOne({ $and: [{ campaignId: campReport['campaignId'] }, { ip: campReport['ip'] }] }, { $inc: { hitcount: +1 } })
                }
                console.log("report",campReport)
                //hitcount > 5 then add record to process by schedule queue, to block this IP

            } else {
                //Save records here
                const createIp = new CampaignReportSummary({
                    campaignId: gcid,
                    ip: client.IPv4,
                    Geolocation: client,
                    hitcount: 0
                });
                await createIp.save();
            }
        }
        return;
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = Receiveclietdata;