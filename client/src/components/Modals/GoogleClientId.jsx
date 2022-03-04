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
            </Modal>
        </>
    )
}

export default GoogleClientId