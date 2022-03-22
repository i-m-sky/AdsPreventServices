import React from 'react'
import NotAccountConnect from './NotAccountConnect'
const status = localStorage.getItem('googleAds') ? JSON.parse(localStorage.getItem('googleAds')).status : false
const GoogleOverview = (props) => {
   
  if(status){
  return (
    <>
  <h2 className='text-center google-overview'>Goolge Account Overview</h2>
      <table className='table-sm' id='data_table'>
        <thead>
          <tr>
            <th>Total Ad Clicks</th>
            <th id='total_saving'>Total Savings </th>
            <th>Fraud Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td id='total_saving_data'>$ 50</td>
            <td>0.00   0.00   0.00</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">AD CLICKS <i className="fas fa-sort"></i></th>
            <th scope="col">BLOCKED IPS <i className="fas fa-sort"></i> </th>
            <th scope="col">CLEANER TRAFFIC <i className="fas fa-sort"></i></th>
            <th scope="col">$ SAVED <i className="fas fa-sort"></i></th>
            <th scope="col">LOW <i className="fas fa-sort"></i></th>
            <th scope="col">SUBSTANTIAL <i className="fas fa-sort"></i></th>
            <th className="col">CRITICAL <i className="fas fa-sort"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
         
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Larry</td>
          </tr>
          <tr>
         
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Larry</td>
          </tr>
        </tbody>
      </table>
    </>
  )
  }
  else{
    return(
      <>
      <NotAccountConnect value='Google'/>
      </>
    )
  }
}

export default GoogleOverview
