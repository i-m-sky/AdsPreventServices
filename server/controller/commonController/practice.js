const bizSdk = require('facebook-nodejs-business-sdk');
const practice = async (req, res) => {
    try {

        // 'use strict';
        // const bizSdk = require('facebook-nodejs-business-sdk');
        // const AdAccount = bizSdk.AdAccount;
        // const Campaign = bizSdk.Campaign;

        // const access_token = "EAATKwfZBZA7xwBAF9cVuZCUZAh3GgFEJwLrs2cCW5XEW9qHiee7mNZAv8mBzM6GlcmDNH04tDpFZBJRwiSsrYLafCvSMAxYcIvhMqeSFXkSHNcxf8KhiUJqAUHHWUv0FySJeWTH6PQbZAxyyabRif9qJdHzYFH2kqFuqA61tGokuGNRsiOhr8BIRc3jEqQcFZAQZD";
        // const app_secret = '64db0e193d94310b30fd3ec7017f64a7';
        // const app_id = '1348834472619804';
        // const id = 'act_3176263665973167';
        // const api = bizSdk.FacebookAdsApi.init(access_token);
        // const showDebugingInfo = true; // Setting this to true shows more debugging info.
        // if (showDebugingInfo) {
        //     api.setDebug(true);
        // }

        // const logApiCallResult = (apiCallName, data) => {
        //     console.log(apiCallName);
        //     if (showDebugingInfo) {
        //         console.log('Data:' + JSON.stringify(data));
        //     }
        // };

        // let fields, params;
        // fields = [
        // ];
        // params = {
        //     'name': 'My campaign',
        //     'objective': 'LINK_CLICKS',
        //     'status': 'PAUSED',
        //     'special_ad_categories': [],
        // };
        // const campaigns = await (new AdAccount(id)).createCampaign(
        //     fields,
        //     params
        // );
        // logApiCallResult('campaigns api call complete.', campaigns);






        const AdAccount = bizSdk.AdAccount;
        const Campaign = bizSdk.Campaign;
        const access_token = "EAAKFNotqalQBAMAjHg5chFyukYuTlHdmZAneXFiRp5ZBXgscDIZAKZCUaOlVLONcS2Rxp4x8bvZBqz4vuCzw00rvCWY6UxbXhn201t7N3ZCPfVFMX67S4RZBcvShZBfJR5dQ182Xj4Sf2lsjn8Xvqzr72JYvOgOP87JZBHrtZCzKFPcG2mdK9pAiU7";
        const app_secret = process.env.FACEBOOK_APP_SECRET;
        const app_id = process.env.FACEBOOK_APP_ID;
        const id = 'act_292452864950209';
        const api = bizSdk.FacebookAdsApi.init(access_token);
        const showDebugingInfo = true; // Setting this to true shows more debugging info.
        if (showDebugingInfo) {
            api.setDebug(true);
        }

        const logApiCallResult = (apiCallName, data) => {
            console.log(apiCallName);
            if (showDebugingInfo) {
                console.log('Data:' + JSON.stringify(data));
            }
        };

        let fields, params;
        fields = [];
        params = {
            'name': 'Adset 2',
            'campaign_id': "23849644720510510",
            "optimization_goal": "REACH",
            "billing_event": "IMPRESSIONS",
            'bid_ammount': "2",
            "daily_budget": "1000",
            "targeting": '{"geo_locations": {"countries":["US"]}, "interests": [{id: 6003139266461, "name": "Movies"}]}'

        };
        const campaigns = await (new AdAccount(id)).createAdSet(
            fields,
            params
        );
        logApiCallResult('campaigns api call complete.', campaigns);






        // const AdAccount = bizSdk.AdAccount;
        // const Campaign = bizSdk.Campaign;
        // const access_token = "EAAKFNotqalQBAMAjHg5chFyukYuTlHdmZAneXFiRp5ZBXgscDIZAKZCUaOlVLONcS2Rxp4x8bvZBqz4vuCzw00rvCWY6UxbXhn201t7N3ZCPfVFMX67S4RZBcvShZBfJR5dQ182Xj4Sf2lsjn8Xvqzr72JYvOgOP87JZBHrtZCzKFPcG2mdK9pAiU7";
        // const app_secret = process.env.FACEBOOK_APP_SECRET;
        // const app_id = process.env.FACEBOOK_APP_ID;
        // const id = 'act_292452864950209';
        // const api = bizSdk.FacebookAdsApi.init(access_token);
        // const showDebugingInfo = true; // Setting this to true shows more debugging info.
        // if (showDebugingInfo) {
        //     api.setDebug(true);
        // }

        // const logApiCallResult = (apiCallName, data) => {
        //     console.log(apiCallName);
        //     if (showDebugingInfo) {
        //         console.log('Data:' + JSON.stringify(data));
        //     }
        // };

        // let fields, params;
        // fields = [
        //     'name',
        //     "account_id",
        //     "daily_budget",
        //     "status",
        //     "start_time",
        //     "created_time",
        //     "spend_cap",
        //     "source_campaign",
        //     "stop_times",
        //     "targeting"
        // ];
        // params = {
        //     'effective_status': ['ACTIVE', 'PAUSED'],
        // };
        // const campaigns = await (new AdAccount(id)).getAdSets(
        //     fields,
        //     params
        // );
        // logApiCallResult('campaigns api call complete.', campaigns);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

module.exports = practice;