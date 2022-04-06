import React, { useEffect, useState } from 'react'
import { GetApi } from '../../services/Services'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
import { PostApi } from '../../services/Services';

const GenerateCode = () => {
    const [code, setCode] = useState();


    const { googleAccount } = useSelector((state) => state.googleReducer);

    const [resdata, resSetRes] = useState([]);
    const [resourceName, SetResourceName] = useState();


    const getCampaigns = async () => {

        PostApi(`/getcampaigns`, { GoogleAdsId: googleAccount._id }).then((data) => {
            if (data.status === true) {
                SetResourceName(data.campaigns[0].campaign.campaign.id)
                resSetRes(data.campaigns)
            }
        })
    }
    useEffect(() => {
        getCampaigns();
    }, [])

    const getCode = (resourceName) => {
        console.log("call")
        GetApi(`/generatescript`).then((data) => {
            if (data.status === true) {
                setCode(`${data.url}?gcid=${resourceName}`);
            }
        })
    }



    useEffect(() => {
        getCode(resourceName);
    }, [resourceName])

    return (
        <>
            <div className='container  mt-5'>
                <div className='row'>

                    <select name="" id="campdrop" onChange={(e) => SetResourceName(e.target.value)}>
                        {resdata.length > 0 ? resdata.map((data, index) => (

                            <option value={data.campaign.campaign.id}>CampaignName - {data.campaign.campaign.name} </option>

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
                                <hr/>
                                    <div className='col-10'>
                                        {"<script>"}<br />
                                        {
                                            `window.onload=function(){
                                             if(typeof _AdProtect !=='undefind' && _AdProtect){
                                             _AdProtect.init('${resourceName}');
                                                }
                                            }`
                                        }
                                        <br />{"</script>"}
                                    </div>
                                    <div className='col-2'>
                                        <CopyToClipboard text={`<script>
                            
                                                window.onload=function(){
                                                if(typeof _AdProtect !=='undefind' && _AdProtect){
                                                 _AdProtect.init('${resourceName}');
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