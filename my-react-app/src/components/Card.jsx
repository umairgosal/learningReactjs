import { Link } from 'react-router-dom';
import profilePic from '../assets/myProfilePic.png'  
import {Modal, Button} from 'antd';
import { useState } from 'react';

function Card(){
    let name = 'umair gosal'

    // const handleClick = ()=>{
    //     <Link to={"/about"}></Link>
    // }
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    };
    const handleOk = () => {
        setModal(false);
    };
    const handleCancel = () => {
        setModal(false);
    };    

    return(
        // <Link to={"/about"}>
        // <div>
        <>
            <div className="card hover:cursor-pointer hover:bg-emerald-600" onClick={showModal}>
                <img className="card-image" src={profilePic} alt="my_profile_pic" />
                <h2 className="card-name text-2xl">Umair Gosal</h2>
                <p className="card-text">I am an undergraduate @ NUST studying Software Engineering</p>
            </div>

            {modal && 
            <Modal title="Hi there" open={modal} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <p>This is your friendly Gosal. He is currently interested in learning React development</p>
                    </div>
                </div>
            </Modal>  
            }
        {/* </div> */}
        {/* </Link> */}
        </>
    );
}

export default Card 