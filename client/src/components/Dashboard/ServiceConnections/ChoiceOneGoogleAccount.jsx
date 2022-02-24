import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { googleAction } from '../../../features/actions/googleAction';
import { useDispatch ,useSelector} from 'react-redux';

const AD_FAIL = 'AD_FAIL';
const AD_SUCCESS = 'AD_SUCCESS'

const ChoiceOneGoogleAccount = () => {

  const {isGoogle, status } = useSelector((state) => state.googleReducer)

  console.log("isGoogle: ",isGoogle,"status: ",status)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { id } = useParams();
  const [clientid, setClientid] = useState();

  const clientSubmit = async (e) => {
    e.preventDefault();
    dispatch(googleAction(id, clientid));
  }

const user = true
  useEffect(() => {

    if (!status) {
      dispatch({ type: AD_FAIL });
      navigate(`/clientid/${id}`);
    }
    else if (status) {
      dispatch({ type: AD_SUCCESS });
      navigate('/dashboard/fraudanalyticsgoogle');
    }
}, [status])

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