import React from 'react'

const AccountOverviewData = (props) => {

    return (
        <>
            <table className='table-responsive table-sm' id='data_table'>
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
          
            <div class="table-responsive table-hover mt-5">
                <table class="table">
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
            </div>
        </>
    )
}

export default AccountOverviewData;
