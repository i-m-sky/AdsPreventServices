import React from 'react'
import Modal from 'react-modal';
import instance from '../../http/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Services from '../../services/services';

const GoogleClientIdModal = (props) => {

    const [managerId,setManagerId] = useState();
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
    console.log("manager", props.managerId)
    

const getData = async(item)=>{
    const res = await Services.SendManagerId(item)
    console.log(res)
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
                           
                                {props.managerId?props.managerId.map((item) =>
                                   <div onClick={()=>getData(item)}> <button className='select_item'>Manager - {item} </button>  </div>
                                ):null}


                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default GoogleClientIdModal;
