import React, { useEffect, useState } from 'react'
import { GetApi } from '../../services/Services'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GenerateCode = () => {
    const [code, setCode] = useState();
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

    return (
        <>
            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-md-3'>
                    </div>
                    <div className='col-md-6 generatecode'>
                       
                        {code && <span>{`<script src="${code}"></script>`}</span> } <CopyToClipboard text={`<script src="${code}"></script>`}>
                             <button className='copybtn'>Copy</button>
                        </CopyToClipboard>
                    </div>
                    <div className='col-md-3'>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GenerateCode