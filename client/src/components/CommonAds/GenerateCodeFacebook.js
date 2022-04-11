import React, { useEffect, useState } from 'react'
import { GetApi, PostApi } from '../../services/Services'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';

const GenerateCode = () => {

    const { facebookAccount, loading } = useSelector((state) => state.facebookReducer);

    const [code, setCode] = useState();
    const [resdata, resSetRes] = useState([]);
    const [campaignId, SetCampaignId] = useState();

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

    const getCampaigns = (account_id) => {

        PostApi(`/facebookcampaigns`, { account_id }).then((data) => {
            console.log("campaings", data)
            if (data.status === true) {
                SetCampaignId(data.camp[0].id);
                resSetRes(data.camp)
            }
        })
    }

    useEffect(() => {
        getCampaigns(facebookAccount.result.account_id)
    }, [])



    return (
        <>
            <div className='container  mt-5'>
                <div className='row'>

                    <select name="" id="campdrop" onChange={(e) => SetCampaignId(e.target.value)}>
                        {resdata.length > 0 ? resdata.map((data, index) => (

                            <option value={data.id}>CampaignName - {data.name} </option>

                        )) : <h1>Not data found</h1>}
                    </select>
                </div>
                <div className='row mt-4'>


                    <div className='row mt-4'>
                        <div className='col-md-2'>

                        </div>
                        <div className='col-md-8 generatecode'>


                            <div className='mt-3'>

                                <div className="row">
                                    <div className='col-10'>
                                        {code && <span>{`<script src="${code}"></script>`}</span>}
                                        <br />
                                    </div>
                                    <div className='col-2'>
                                        <CopyToClipboard text={`<script src="${code}"></script>`}>
                                            <button className='copybtn'> Copy</button>
                                        </CopyToClipboard>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <hr />
                                    <div className='col-10'>
                                        {"<script>"}<br />
                                        {
                                            `window.onload=function(){
                                             if(typeof _AdProtect !=='undefind' && _AdProtect){
                                             _AdProtect.init('${campaignId}','Facebook');
                                                }
                                            }`
                                        }
                                        <br />{"</script>"}
                                    </div>
                                    <div className='col-2'>
                                        <CopyToClipboard text={`<script>
                            
                                                window.onload=function(){
                                                if(typeof _AdProtect !=='undefind' && _AdProtect){
                                                 _AdProtect.init('${campaignId}','Facebook');
                                                }
                                                 }
                        
                                             </script>`}>
                                            <button className='copybtn'> Copy</button>
                                        </CopyToClipboard>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className='col-md-2'>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GenerateCode;