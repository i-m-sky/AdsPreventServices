import React from 'react'

const DetectedIps = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10 detectediplist">
                        <table className="table table-hover">

                          
                            <tbody>
                            <tr className='detecttable'>
                                <th scope="row" className='iplist'>Ip Address</th>
                                <td>Threat Level</td>
                                <td>Blocked</td>
                                <td>Block Reason</td>

                            </tr>
                                <tr className='critical'>
                                    <th scope="row" className='iplist'>127.0.0.12</th>
                                    <td>Critical</td>
                                    <td>Blocked <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td>Bot</td>

                                </tr>
                                <tr >
                                    <th scope="row">123.26.23/30</th>
                                    <td>Low</td>
                                    <td>Blocked  <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <th scope="row">13.26.23/36</th>
                                    <td>Low</td>
                                    <td>Blocked  <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td></td>

                                </tr>
                                <tr className='critical'>
                                    <th scope="row">132.26.23/16</th>
                                    <td>Critical</td>
                                    <td>Blocked  <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td>Bot</td>

                                </tr>
                                <tr>
                                    <th scope="row">132.26.23/8</th>
                                    <td>Low</td>
                                    <td>Blocked  <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <th scope="row">232.26.23/32</th>
                                    <td>Low</td>
                                    <td>Blocked  <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td> </td>

                                </tr>
                                <tr>
                                    <th scope="row">2.26.23/16</th>
                                    <td>Low</td>
                                    <td>Blocked  <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <th scope="row">12.26.2/16</th>
                                    <td>Low</td>
                                    <td>Blocked  <label class="switch ml-3">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label></td>
                                    <td> </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
            </div>
        </>
    )
}

export default DetectedIps