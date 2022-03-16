import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { saveGoogleData } from '../../../services/services'
import Services from '../../../services/services';

const ChoiceOneGoogleAccount = (props) => {

  const navigate = useNavigate();

  const { id, refreshToken } = useParams();

  const [clientid, setClientid] = useState("");

  const managerId = id;
  const refresh_token = atob(refreshToken);

  const clientSubmit = async (e) => {
    e.preventDefault();
    const res = await Services.SendClientId(managerId, clientid, refresh_token)
    if (res.data.status === true) {
      saveGoogleData(res.data)
      navigate('/dashboard/fraudanalyticsgoogle')
    } else if (res.data.status === false) {
      alert("Invalid Client id")
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