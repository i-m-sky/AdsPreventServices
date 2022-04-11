import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Payment = () => {

    const { price } = useParams();
    return (
        <>
            <section >
                <div className="container py-5 ">
                    <div className="card payment-cont">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center pb-5">
                                <div className="col-md-7 col-xl-5 mb-4 mb-md-0 mt-5">

                                    <h4 className="text-success">${price}.00</h4>
                                    <h4>Standard & Supplies</h4>

                                    <p>
                                        Insurance claims and all necessary dependencies will be submitted to your
                                        insurer for the coverred portion of this order
                                    </p>

                                    <div className="pt-2">
                                        <div className="d-flex pt-2">
                                            <div className="ms-auto">
                                                <p className="text-primary">
                                                    <i className="fas fa-plus-circle text-primary pe-1"></i>Add card
                                                </p>
                                            </div>
                                        </div>

                                        <form className="pb-3">
                                            <div className="d-flex flex-row pb-3">
                                                <div className="d-flex align-items-center pe-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="radioNoLabel"
                                                        id="radioNoLabel1"
                                                        value=""
                                                        aria-label="..."
                                                        checked
                                                    />
                                                </div>
                                                <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                    <p className="mb-0">
                                                        <i className="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa Debit
                                                        Card
                                                    </p>
                                                    <div className="ms-auto">************3456</div>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row">
                                                <div className="d-flex align-items-center pe-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="radioNoLabel"
                                                        id="radioNoLabel2"
                                                        value=""
                                                        aria-label="..."
                                                    />
                                                </div>
                                                <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                    <p className="mb-0">
                                                        <i className="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>Mastercard
                                                        Office
                                                    </p>
                                                    <div className="ms-auto">************1038</div>
                                                </div>
                                            </div>
                                        </form>
                                        <input
                                            type="button"
                                            value="Proceed to payment"
                                            className="btn btn-primary btn-block btn-lg"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-5 col-xl-4 offset-xl-1">
                                    <div className="py-4 d-flex justify-content-end">
                                        <h6><Link to="/">Cancel and return to website</Link></h6>
                                    </div>
                                    <div className="rounded d-flex flex-column p-2 payment-sidebar" >
                                        <div className="p-2 me-3">
                                            <h4>Summary</h4>
                                        </div>
                                        <div className="p-2 d-flex">
                                            <div className="col-8">
                                                Original price</div>
                                            <div className="ms-auto">${price}</div>
                                        </div>


                                        <div className="p-2 d-flex">
                                            <div className="col-8">
                                                Coupon discounts: <span className="fa fa-question-circle text-dark"></span>
                                            </div>
                                            <div className="ms-auto"><b>$00.0</b></div>
                                        </div>
                                        <div className="border-top px-2 mx-2"></div>
                                        <div className="p-2 d-flex pt-3">
                                            <div className="col-8"><b>Total</b></div>
                                            <div className="ms-auto"><b className="text-success">${price}.00</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Payment