import "./style.css"

import { SiWindows11 } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { FaEdge } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaChrome } from "react-icons/fa";

import imagemVsCode from '../../assets/vscode.png'
import imagemChrome from '../../assets/chrome.png'
import imagemEdge from '../../assets/edge.png'
import imagemTeams from '../../assets/teams.png'

import iconEdge from '../../assets/icons/iconEdge.png'
import iconVsCode from '../../assets/icons/iconVsCode.png'
import iconTeams from '../../assets/icons/iconTeams.png'
import iconChrome from '../../assets/icons/iconChrome.png'




export const Footer = () => {
    return(
        <div className="container">
           <div className="container-content">
                 <SiWindows11 style={{height:'25px', width:'35px', color:'#0073cc', marginRight:'5px'}}/>

                 <div className="search-container">
                    <IoIosSearch className="search-icon" />
                    <input type="text" placeholder="Pesquisar" className="search-input" />
                 </div>

                <div className="container-icons">
                    <div className="icon-with-dropdown">
                        <img src={iconEdge} style={{ height: '30px', width: '30px', marginRight: '7px', marginLeft: '5px' }}/>
                        <div className="dropdown">
                            <div className="container-dropdown">
                                <div className="container-title-dropdown">
                                <div className="container-title-dropdown-icon">
                                    <img src={iconEdge} style={{ height: '20px', width: '20px', display:'flex' }} />
                                    </div>
                                    <p>Pesquisas devs - Egde</p>
                                </div>
                                <div className="container-imagem-dropdown">
                                    <img src={imagemEdge} width='180px' height='100px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon-with-dropdown">
                    <img src={iconVsCode} style={{ height: '30px', width: '30px', marginRight: '7px', marginLeft: '5px' }}/>
                        <div className="dropdown">
                            <div className="container-dropdown">
                                <div className="container-title-dropdown">
                                <div className="container-title-dropdown-icon">
                                <img src={iconVsCode} style={{ height: '20px', width: '20px', display:'flex' }} />
                                    </div>
                                    <p>index.tsx - react projeto</p>
                                </div>
                                <div className="container-imagem-dropdown">
                                    <img src={imagemVsCode} width='180px' height='100px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon-with-dropdown">
                        <img src={iconTeams} style={{ height: '30px', width: '30px', marginRight: '7px', marginLeft: '5px' }}/>
                        <div className="dropdown">
                            <div className="container-dropdown">
                                <div className="container-title-dropdown">
                                <div className="container-title-dropdown-icon">
                                 <img src={iconTeams} style={{ height: '20px', width: '20px', display:'flex' }} />
                                    </div>
                                    <p>Calendário - Matheus</p>
                                </div>
                                <div className="container-imagem-dropdown">
                                    <img src={imagemTeams} width='180px' height='100px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon-with-dropdown">
                    <img src={iconChrome} style={{ height: '30px', width: '30px', marginRight: '7px', marginLeft: '5px' }}/>
                        <div className="dropdown">
                            <div className="container-dropdown">
                                <div className="container-title-dropdown">
                                <div className="container-title-dropdown-icon">
                                <img src={iconChrome} style={{ height: '20px', width: '20px', display:'flex' }} />
                                    </div>
                                    <p>React App - Google</p>
                                </div>
                                <div className="container-imagem-dropdown">
                                    <img src={imagemChrome} width='180px' height='100px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div> 
        </div>
    )
}