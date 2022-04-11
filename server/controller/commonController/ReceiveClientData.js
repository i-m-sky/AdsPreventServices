
const Campaignreport = require("../../model/Campaign-Report");
const CampaignReportSummary = require("../../model/Campaign-Report-Summary")
const Schedule = require("../../model/Schedule");

const Receiveclietdata = async (req, res) => {
    try {
        const { client, cid, gclid, utm_campaign, fbclid, type } = req.body

       // Google's client Setup 
        if (type === 'Google') {
        
            if (gclid && utm_campaign) {

                const createuser = new Campaignreport({ campaignId: gcid, ip: client.IPv4, geolocation: client });

                await createuser.save();

                const campReport = await CampaignReportSummary.findOne({ $and: [{ campaignId: gcid }, { ip: client.IPv4 }] });

                if (campReport) {

                    if (campReport['ip'] === `${client.IPv4}`) {
                        await CampaignReportSummary.updateOne({ $and: [{ campaignId: campReport['campaignId'] }, { ip: campReport['ip'] }] }, { $inc: { hitcount: +1 } })
                    }
                    if (campReport.hitcount > 5) {
                        const createSchedule = new Schedule({ campaignId: gcid, ip: client.IPv4, fun: "ExcludeIpGoogle" });
                        await createSchedule.save();
                    }

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
        }


        //Facebok's client Setup

        if (type === 'Facebook') {
        
            if (fbclid && utm_campaign) {
                const createuser = new Campaignreport({ campaignId: cid, ip: client.IPv4, geolocation: client });

                await createuser.save();

                const campReport = await CampaignReportSummary.findOne({ $and: [{ campaignId: cid }, { ip: client.IPv4 }] });
                if (campReport) {

                    if (campReport['ip'] === `${client.IPv4}`) {

                        await CampaignReportSummary.updateOne({ $and: [{ campaignId: campReport['campaignId'] }, { ip: campReport['ip'] }] }, { $inc: { hitcount: 1 } })
                    }
                    if (campReport.hitcount > 5) {
                        const createSchedule = new Schedule({ campaignId: cid, ip: client.IPv4, fun: "ExcludeIpFacebook" });
                        await createSchedule.save();
                    }

                    //hitcount > 5 then add record to process by schedule queue, to block this IP

                } else {
                    //Save records here
                    const createIp = new CampaignReportSummary({
                        campaignId: cid,
                        ip: client.IPv4,
                        Geolocation: client,
                        hitcount: 1
                    });
                    await createIp.save();
                }
            }
            return;
        }
        return;
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = Receiveclietdata;