const cheerio = require('cheerio');
const axios = require('axios');
const SpamIp = require('../../model/SpamIp')

const Listing = async (Iplist) => {
        try {
                // const exists = await SpamIp.exists({ $and: [{ resource: "SpamhausIp" }, { ip: Iplist }] });
                const exists = await SpamIp.findOne({ ip: Iplist });
                if (exists) {


                        if (exists['resource'] != 'SpamhausIp') {
                                const updateweightage = await SpamIp.updateOne({ ip: exists['ip'] }, { $inc: { weightage: +1 } })
                        }

                } else {
                        //Save records here
                        const createIp = new SpamIp({ resource: "spamhauip", ip: Iplist, weightage: 0 });
                        const result = await createIp.save();
                        console.log("Result: ", result)
                }
                return;
        } catch (e) {
                return;
        }
        return;
}

const SpamhausSpamIps = async (req, res) => {

        try {
                const response = await axios.get("https://www.spamhaus.org/sbl/listings/microsoft.com")

                const html = response.data;

                const $ = cheerio.load(html);

                $('span.body > b').map(function async() {

                        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/[0-9][0-9]$/.test(($(this).text()))) {

                                let Iplist = ($(this).text());
                                Listing(Iplist);
                        }
                });

        } catch (error) {
                return;
        }
}

module.exports = SpamhausSpamIps;


