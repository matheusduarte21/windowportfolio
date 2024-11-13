import { FaGithub } from "react-icons/fa";
import './style.css';


interface GithubIconColumnProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GithubIconColumn: React.FC<GithubIconColumnProps> = (props) => {

    const redirectGitHub = () => {
        window.open('https://github.com/matheusduarte21', '_blank');
    }

    return (
        <div className='container-gitHubIcon' {...props}>
            <div className="content-container-gitHubIcon">
                <div className="icon-gitHubIcon">
                    <FaGithub style={{ height: '50px', width: '50px', color: '#fff' }} onClick={redirectGitHub} />
                </div>
                <div className="title-icons">
                    GitHub
                </div>
            </div>
        </div>
    );
};
