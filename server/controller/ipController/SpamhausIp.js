const cheerio = require('cheerio');
const axios = require('axios');
const SpamIp = require('../../model/SpamIp')

const Listing = async (Iplist) => {
        try {
                const createIp = new SpamIp({resource:"SpamhausIp", ip: Iplist,weightage:0 });
                const result = await createIp.save();
                console.log(result);

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


