import React from 'react'
import { useParams } from 'react-router-dom';
import {useState} from 'react'
import Services from '../../../services/services';
import instance from '../../../http/axios';
import { useNavigate } from 'react-router-dom';
const ChoiceOneGoogleAccount = () => {
const navigate = useNavigate();
const {id} = useParams();
const [clientid, setClientid] = useState();
const [resdata,setResdata] = useState();

console.log(clientid , "-----------clientid")

  const clientSubmit = async(e)=>{
    e.preventDefault();
    const res = await instance.post('/google-client',{id,clientid})
    if(res.data.status===true){
      navigate(`/dashboard/fraudanalyticsgoogle/${res.data.status}`)
    }else{
      navigate(`/clientid/${id}`)
      alert("Invalid Client Id Please Try again")
    }
   
  }
  
  return (
    <>
      <div className="container mt-4">
        <div className="row">

          <div className="col-md-3">

          </div>
          <div className="col-md-6 gm_common mt-4">
            <div className="manual-div ">
              <h2>Enter your Google Client</h2>
              <p>Submit your Google Ads account or MCC
                and access request to get connected</p>
            </div>
            <div className='manual-input'>
              <form onSubmit={clientSubmit}>
                <input 
                type="text"  
                placeholder='123-456-7890' 
                id='google_id' 
                value={clientid}
                onChange={(e)=>setClientid(e.target.value)}
                />
                <input type="submit" className='service-btn' />
              </form>
            </div>
          </div>
          <div className="col-md-3">

          </div>
        </div>


      </div>
    </>
  )
}

export default ChoiceOneGoogleAccount;