import React from 'react'
import { useEffect, useState } from 'react';
import { GetApi, PostApi } from '../../services/Services'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Coutnries = () => {
    const FacebookAdsAccount = localStorage.getItem('facebookAds') ? JSON.parse(localStorage.getItem('facebookAds')).result.account_id : null
    const access_token = localStorage.getItem('facebookAds') ? JSON.parse(localStorage.getItem('facebookAds')).result.access_Token : null
    const [countries, setCountries] = useState();
    const [Country, SetCountry] = useState();
    const [findCountry, setFindCountry] = useState();
    const [adSet, setAdSet] = useState([]);
    const [adId,setAdId] = useState();

    const getCountries = () => {
        GetApi(`/countries`).then((data) => {
            if (data.status === true) {
                setCountries(data.Countries);
            }
        })
    }
    const SearchCountry = (e) => {
        e.preventDefault();
        PostApi(`/searchcountry`, { Country }).then((data) => {
            if (data.status === true) {
                setFindCountry(data.Countries)
            }
            else if (data.status === false) {
                toast.error("Country not found!", { autoClose: 900 });

            }
        })
    }

    const getData = (iso2) => {
        console.log("Exclude:",iso2,adId,FacebookAdsAccount)
        PostApi(`/excludecountry`, { iso2,adId,access_token}).then((data) => {
            if (data.status === true) {
                toast("Exclude country success", { autoClose: 900 });
            }
        })
    }
    const getAdSets = (FacebookAdsAccount) => {
        PostApi(`/facebookadsets`, { account_id: FacebookAdsAccount }).then((data) => {
            console.log("adsets", data)
            if (data.status === true) {
                setAdId(data.camp[0].id)
                setAdSet(data.camp);
            }
        })
    }



    useEffect(() => {
        getCountries();
        getAdSets(FacebookAdsAccount)
    }, [])


    return (
        <>
            <div className="container">

                {/* Request for search country */}
                <div className='fbcouInput mt-4'>
                    <form onSubmit={SearchCountry}>
                        <input type="text" placeholder='India' id='couinput' onChange={(e) => SetCountry(e.target.value,)} />
                        <button className='searchCountry' onClick={SearchCountry}>Search Country</button>
                    </form>
                </div>

                {/* Drop down for selecet adsets */}
                <div className="adset mt-3">
                    <select name="" id="campdrop" onChange={(e) => setAdId(e.target.value)}>
                        {adSet.length > 0 ? adSet.map((data, index) => (

                            <option value={data.id}> AdSetName - {data.name}  </option>

                        )) : <h1>Not data found</h1>}
                    </select>
                </div>

             {/* if country available in search */}
                <div className="row mt-5">
                    {findCountry ? findCountry && findCountry.length > 0 ? findCountry.map((data, index) => (
                        <>
                            <div className="col-4"></div>
                            <div className="col-md-4">
                                <table className="table table-hover border">
                                    <tbody>
                                        <tr>
                                            <th>{data.name}</th>
                                            <td>{data.iso2}</td>
                                            <td> <label className="switch ">
                                                <input type="checkbox" onChange={(e) => getData(data.iso2)} />
                                                <span className="slider round"></span>
                                            </label></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )) : "Not found" : <div className="row mt-5">

                        {/* list of all available country */}
                        {countries && countries.length > 0 ? countries.map((data, index) => (
                            <>
                                <div className="col-md-4">
                                    <table className="table table-hover border">
                                        <tbody>
                                            <tr>
                                                <th>{data.name}</th>
                                                <td>{data.iso2}</td>
                                                <td> <label className="switch ">
                                                    <input type="checkbox" checked={false} onChange={(e) => getData( data.iso2)} />
                                                    <span className="slider round" ></span>
                                                </label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )) : <h1>Countries Not found !</h1>}

                    </div>}
                    <div className="col-4"></div>
                </div>

            </div>

        </>
    )
}

export default Coutnries;
