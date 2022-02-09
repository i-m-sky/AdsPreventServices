const SpamIp = require('../../model/SpamIp');

const Listing = async(Iplist) => {

    try {
        const createIp = new SpamIp({ ip: Iplist });
        const result = await createIp.save();
        console.log(result);

    } catch (e) {
        return;
    }
    return;
}

const CleanTalkIp = async(req, res) => {
    try {
        const response = await axios.get("https://cleantalk.org/blacklists/spam-ip")

        const html = response.data;

        const $ = cheerio.load(html);

        let data = []

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

module.exports = CleanTalkIp;
