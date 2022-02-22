import React from 'react'
import Modal from 'react-modal';
import { Navigate } from 'react-router-dom';

const GoogleClientId = (props) => {

    const navigate = Navigate();
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
                        <h2>Select your Google Ads Manager Id</h2>

                        <div className='manual-input'>

                          <input type="text" placeholder='Enter your google client id' />
                          <input type="submit" />

                        </div>
                    </div>

                </div>
            </Modal>
        </>


    )
}

export default GoogleClientId