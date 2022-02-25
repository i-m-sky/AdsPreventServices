const SpamIp = require('../../model/SpamIp');
const axios = require('axios')

const Listing = async (IpList) => {
    try {
        console.log(IpList)
        for (let i = 0; i < IpList.length; i++) {
            const exists = await SpamIp.findOne({ ip: IpList[i] });

            if (exists) {

                if (exists['resource'] != 'SpamhausIp') {
                    const updateweightage = await SpamIp.updateOne({ ip: exists['ip'] }, { $inc: { weightage: +1 } })
                }

            } else {
                //Save records here
                const createIp = new SpamIp({ resource: "myip.ms", ip: IpList[i], weightage: 0 });
                const result = await createIp.save();
                console.log("Result: ", result)
            }
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
