import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { googleAdsAction, clearGoogleError } from '../../../../features/actions/googleAdsAction';
import { toast } from 'react-toastify';
import Spinner from '../../../pages/Spinner';



const ChoiceOneGoogleAccount = (props) => {

  const { googleAccount, googleError, loading } = useSelector((state) => state.googleReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, refreshToken } = useParams();

  const [clientId, setClientid] = useState("");

  const managerId = id;
  const refresh_token = atob(refreshToken);

  const clientSubmit = async (e) => {
    e.preventDefault();
    dispatch(googleAdsAction(managerId, clientId, refresh_token));
  }
  useEffect(() => {
    if (googleError) {
      toast.error("Client id not Match");
      dispatch(clearGoogleError())
    }
  }, [googleError])


  useEffect(() => {
    if (googleAccount) {
      navigate('/dashboard/fraudanalytics/google');
    }
  }, [])


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
            <div className='spinne-area mt-3'>
              {loading && <Spinner />}
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