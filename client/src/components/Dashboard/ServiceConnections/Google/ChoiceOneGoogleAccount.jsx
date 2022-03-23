import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PostApi,saveGoogleData} from '../../../../services/Services';


const ChoiceOneGoogleAccount = (props) => {

  const navigate = useNavigate();

  const { id, refreshToken } = useParams();

  const [clientId, setClientid] = useState("");

  const managerId = id;
  const refresh_token = atob(refreshToken);

  const clientSubmit = async (e) => {
    e.preventDefault();
    PostApi(`google-client`,{managerId,clientId,refreshToken:refresh_token}).then((data)=>{
      if (data.status === true) {
        saveGoogleData(data)
        navigate('/dashboard/fraudanalyticsgoogle')
      } else if (data.status === false) {
        alert("Invalid Client id")
      }
    })
    
   
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
                  value={clientId}
                  onChange={(e) => setClientid(e.target.value)}
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