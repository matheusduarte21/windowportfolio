import { useState } from "react";
import { FcBusinessContact } from "react-icons/fc";

import './style.css'
import { ContentWork } from "./content/ContentWork";
import ModalCustom from "../../modal/modal";


interface WorkExperiencie extends React.HTMLAttributes<HTMLDivElement> {}
export const WorkExperiencie: React.FC<WorkExperiencie> = (props) =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(

        <div className='container-gitHubIcon'{...props}>
            
            <ModalCustom isOpen={isModalOpen} onClose={closeModal} >
                 <ContentWork/>
            </ModalCustom>

            <div className="content-container-gitHubIcon">
                <div className="icon-gitHubIcon">
                    <FcBusinessContact style={{height:'50px', width:'70px'}} onClick={openModal}/>
                </div>
                <div className="title-icons">
                    Experience
                </div>
            </div>
        </div>
    )
}