import React, { useEffect, useState } from 'react'
import { GetApi, PostApi } from '../../services/Services'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';

const GenerateCode = () => {

    const { FacebookAdsAccount, loading } = useSelector((state) => state.facebookReducer);
    console.log("h", FacebookAdsAccount)

    const [code, setCode] = useState();
    const [resdata, resSetRes] = useState([]);

    const getCode = () => {
        GetApi(`/generatescript`).then((data) => {
            if (data.status === true) {
                console.log(data.url)
                setCode(data.url);
            }
        })
    }
    useEffect(() => {
        getCode();
    }, [])

    const getCampaigns = (FacebookAdsAccount) => {

        PostApi(`/facebookcampaigns`, { account_id: FacebookAdsAccount }).then((data) => {
            console.log("campaings", data)
            if (data.status === true) {
                resSetRes(data.camp)
            }
        })
    }

    useEffect(() => {
        getCampaigns(FacebookAdsAccount)
    }, [])

    const setAdId = ()=>{
        // console.log()
    }


    return (
        <>
            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-md-3'>
                    </div>
                    <div className='col-md-6 generatecode'>
                        <div className="adset mt-3">
                            <select name="" id="campdrop" onChange={(e) => setAdId(e.target.value)}>
                                {resdata.length > 0 ? resdata.map((data, index) => (

                                    <option value={data.id}> campaign - {data.name}  </option>

                                )) : <h1>Not data found</h1>}
                            </select>
                        </div>

                        {code && <span>{`<script src="${code}?"></script>`}</span>} <CopyToClipboard text={`<script src="${code}?google-campaigns=123455"></script>`}>
                            <button className='copybtn'> Copy</button>
                        </CopyToClipboard>

                    </div>
                    <div className='col-md-3'>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GenerateCode;