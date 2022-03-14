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

    const Selectcampaign = (campaign)=>{
        console.log("camp data",campaign.campaign.campaign.resourceName)
        
        navigate(`/dashboard/fraudanalyticsgoogle/blockip/${btoa(campaign.campaign.campaign.resourceName)}`)
    }

    const closeModal = () => {
        props.setIsOpen(false);   
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

                        <h2>Select Campaign</h2>

                        <div className='manual-input mt-2'>

                            {props.campaigns.length > 0 ? props.campaigns.map((data, index) => (

                                <div className="mt-4">
                                    <div className="detectediplist" onClick={()=>Selectcampaign(data)}>
                                        <div>
                                            <div>
                                                <span className='textkey'>Name</span> - <span>{data.campaign.campaign.name}</span>
                                            </div>
                                            <div>
                                                <span className='textkey'>resourceName</span> - <span>{data.campaign.campaign.resourceName}</span>
                                            </div>
                                            <div>
                                                <span className='textkey'>Status</span> - <span>{data.campaign.campaign.status}</span>
                                            </div>
                                            <div>
                                                <span className='textkey'>ServingStatus</span> - <span>{data.campaign.campaign.servingStatus}</span>
                                            </div>
                                            <div>
                                                <span className='textkey'>id</span> - <span>{data._id}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : <h1>Not data found</h1>}
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default GoogleClientIdModal;
