import { FcOpenedFolder } from "react-icons/fc";
import './style.css'
import { useState } from "react";
import { ContentProjects } from "./content/ContentProjects";
import ModalCustom from "../../modal/modal";

interface ProjectIconColumn extends React.HTMLAttributes<HTMLDivElement> {}
export const ProjectIconColumn: React.FC<ProjectIconColumn> = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
        <div className='container-gitHubIcon'{...props}>
            <ModalCustom isOpen={isModalOpen} onClose={closeModal} >
                 <ContentProjects/>
            </ModalCustom> 
            <div className="content-container-gitHubIcon">
                <div className="icon-gitHubIcon">
                    <FcOpenedFolder style={{height:'50px', width:'50px'}} onClick={openModal}/>
                </div>
                <div className="title-icons">
                    Projects
                </div>
            </div>
        </div>
    )
}