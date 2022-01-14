import React from 'react'
import { Modal } from 'react-modal'
import { useState } from 'react'
const AddDomain = (props) => {

    const [domain, setDomain] = useState("");
    const [industry, setIndustry] = useState("");

    const addDomain = ()=>{
        console.log(domain)
        console.log(industry)
    }

    const closeModal = () => {
        props.setIsOpen(false);

    }

    return (
      <>
        
        <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >

                <div><h1>Add Domain</h1> </div>
                <div>
                    <form >
                        <div className="form-group">
                            <label for="exampleInputName1">Name</label>

                            <input type="text" className="form-control" onChange={(e) => setDomain(e.target.value)} value={domain} id="exampleInputName1" autocomplete="off" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputRole1">Role</label>
                            <select>
                                    <option>Computer Services</option>
                                    <option>Home Care</option>
                                    <option>Health/Fitness</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputRole1">Role</label>
                            <select
                                id="exampleInputRole1"
                                className='form-control'
                                onChange={(e)=>setIndustry(e.target.value)}
                            >
                               
                                    <option value='Computer Services' >Computer Services</option>
                                    <option value='Health/Fitness'>Health/Fitness</option>
                                    <option value='Marketing'>Marketing</option>
                              

                            </select>
                        </div>
                        <button type="submit" className='btn' id='btnupdate' onClick={addDomain}>Add User</button>
                        <button className='btn' id='btnclose' onClick={closeModal}>close</button>
                    </form>
                </div>
            </Modal>
      </>
    )
}

export default AddDomain
