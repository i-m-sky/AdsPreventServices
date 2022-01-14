import React from 'react'

const AccountOverviewData = (props) => {

    return (
        <>
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
                        <th scope="col">DOMAIN <i className="fas fa-sort"></i></th>
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
                        <th scope="row">Google.com</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Larry</td>
                    </tr>
                    <tr>
                        <th scope="row">Facebook.com</th>
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

export default AccountOverviewData;
