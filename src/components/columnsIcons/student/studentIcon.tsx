import { useState } from "react";
import { FcGraduationCap } from "react-icons/fc";

import { ContentStudent } from "./content/contentStude";
import ModalCustom from "../../modal/modal";


interface StudentIcon extends React.HTMLAttributes<HTMLDivElement> {}
export const StudentIcon: React.FC<StudentIcon> = (props) =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(

        <div className='container-gitHubIcon'{...props}>
            <ModalCustom isOpen={isModalOpen} onClose={closeModal} >
                 <ContentStudent/>
            </ModalCustom>
            <div className="content-container-gitHubIcon">
                <div className="icon-gitHubIcon">
                    <FcGraduationCap style={{height:'50px', width:'50px', color: 'blue'}} onClick={openModal}/>
                </div>
                <div className="title-icons">
                    Studies
                </div>
            </div>
        </div>
    )
}