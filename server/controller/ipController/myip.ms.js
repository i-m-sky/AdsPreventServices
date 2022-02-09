const SpamIp = require('../../model/SpamIp');
const axios = require('axios')

const Listing = async(IpList) => {
    try {
        console.log(IpList)
        for(let i = 0; i<IpList.length; i++) {
            const createIp = new SpamIp({ip:IpList[i]});
            const result = await createIp.save();
            console.log(result);
        }
    } catch (e) {
        return;
    }
    return;
}

const myip = async (req, res) => {
    try {
        const response = await axios.get("https://myip.ms/files/blacklist/general/latest_blacklist.txt")
        const data = response.data;

        const reg = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g;
        const IpList = data.match(reg)
        Listing(IpList)

    } catch (error) {
        return;
    }
}

module.exports = myip;
