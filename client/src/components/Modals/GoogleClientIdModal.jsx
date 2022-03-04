import React from 'react'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Services from '../../services/services';

const GoogleClientIdModal = (props) => {

    const navigate = useNavigate();
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',

        },
    }

    const closeModal = () => {
        props.setIsOpen(false);
        navigate('/dashboard/googleserviceconnection')

    }
    const getData = async (item) => {

        const res = await Services.SendManagerId(item, props.refreshToken)

        if (res.data.status === true) {
            navigate(`/clientid/${res.data.result.managerId}/${btoa(props.refreshToken)}`);
        }
    }
    return (
        <>
            <Modal
                isOpen={props.modalIsOpen}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={closeModal}
                style={customStyles}

            >
                <div className="container">
                    <div className='text-center mt-4'>
                        <h2>Select your Google Ads Account</h2>

                        <div className='manual-input mt-2'>

                            {props.clientDetails ? props.clientDetails.map((item) =>

                                <div > <button className='select_item mt-3' onClick={() => getData(item.id)}>
                                    <div className="google-accounts" >
                                        <h4>{item.descriptiveName}</h4>
                                        <img src="/images/GoogleAds.png" alt="" id='googlead' /><br />
                                    </div>

                                    <span>{item.id}</span>

                                </button>  </div>

                            ) : null}
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default GoogleClientIdModal;
