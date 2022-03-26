import React from 'react'
import { useEffect, useState } from 'react';
import { GetApi, PostApi } from '../../services/Services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Coutnries = () => {

    const [countries, setCountries] = useState();
    const [Country, SetCountry] = useState();
    const [findCountry, setFindCountry] = useState();

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
            else if(data.status === false){
                toast.error("Country not found!", {autoClose:900});
               
            }
        })
    }
   
    useEffect(() => {
        getCountries();
    }, [])


    return (
        <>
            <div className="container">
                <div className='fbcouInput mt-4'>
                    <form onSubmit={SearchCountry}>
                        <input type="text" placeholder='India' id='couinput' onChange={(e) => SetCountry(e.target.value)} />
                        <button className='searchCountry' onClick={SearchCountry}>Search Country</button>
                    </form>
                </div>

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
                                                <td> <label class="switch ">
                                                    <input type="checkbox" />
                                                    <span class="slider round"></span>
                                                </label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )) : "Not found" : <div className="row mt-5">
                            { countries && countries.length > 0 ? countries.map((data, index) => (
                                    <>
                                        <div className="col-md-4">
                                            <table className="table table-hover border">
                                                <tbody>
                                                    <tr>
                                                        <th>{data.name}</th>
                                                        <td>{data.iso2}</td>
                                                        <td> <label class="switch ">
                                                            <input type="checkbox" />
                                                            <span class="slider round"></span>
                                                        </label></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )) : <h1>Not data found</h1>}

                        </div>}
                    <div className="col-4"></div>
                </div>

            </div>

        </>
    )
}

export default Coutnries;
