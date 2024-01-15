import dev_17 from '../../images/dev_17.png'
import node from '../../images/node.png'
import react from '../../images/7423887_react_react native_icon.png'
import js from '../../images/282802_javascript_js_icon.png'
import vscode from '../../images/9118335_vscode_fill_icon.png'
import atom from '../../images/9111282_atom_icon.png'
import html from '../../images/2560049_five_html_media_network_social_icon.png'
import css from '../../images/3994346_code_coding_css_html_programming_icon.png'
import ds from '../../images/4071402_science_technology_application_data_future of farming_icon.png'
import algo from '../../images/4552617_algorithm_map_scheme_site_site map_icon.png'
import mongo from '../../images/mongodb.png'
import mern from '../../images/mern.png'
import networking from '../../images/2931163_exchange_network_share_sharing_social_icon.png'
import os from '../../images/9042760_mac_os_window_icon.png'
import postman from '../../images/4691397_postman_icon.png'
import github from '../../images/394187_github_icon.png'
import render from '../../images/3427271_3d scan_printer_printing_render_scan_icon.png'
import db from '../../images/8541628_database_data_storage_icon.png'


function About(){
    return(
        <div className="container">
            <div className="abt-wrapper-1  ">
                <p className="abt-para  " style={{margin:'30px'}}>
                    <div className="para-con-1" style={{color:'white'}}>
                        <div className="head" >
                            <h1>Know Who <span style={{color:'#392467'}}>I'M</span> </h1>
                        </div>
                        <p> Hi Everyone, I am <span style={{color:'#392467'}}> Dhananjay Meshram</span> from Indore (MP), India.</p> 
                        <p>I have completed B.tech from UIT RGPV Bhopal. </p>
                        

                        <div className="tail">
                            <p>Apart from coding other activities I love to do:</p>
                            <p>Playing Games</p> 
                            <p>Watching Anime </p>
                        </div>
                    </div>
                                      
                </p>
                <div className="img-con abt">
                    <img src={dev_17} alt="dev-img" />
                </div>
            </div>
            <div className="abt-wrapper">
                <div className="skills">
                    <div className="heading">
                        <h1 style={{color:'white'}}>Professional Skill Set</h1>
                    </div>
                    <div className="skill-set">
                        <div className="skill-set-div">
                            <div className="row-1">
                                <div className="div-1">
                                    <img src={node} alt="node.js" />
                                    <div className="cover node">
                                        <p>Node JS</p>
                                    </div>
                                </div>
                                <div className="div-1">
                                    <img src={react} alt="react" />
                                    <div className="cover react">
                                        <p>REACT</p>
                                    </div>
                                </div>
                                <div className="div-1">
                                    <img src={js} alt="javascript" />
                                    <div className="cover javascript">
                                        <p>Javascript</p>
                                    </div>
                                </div>
                                <div className="div-1">
                                    <img src={vscode} alt="vscode" />
                                    <div className="cover vscode">
                                        <p>VS Code</p>
                                    </div>
                                </div>
                                <div className="div-1">
                                    <img src={atom} alt="Atom" />
                                    <div className="cover atom">
                                        <p>Atom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row-2">
                                <div className="div-1">
                                    <img src={db} alt="database" />
                                    <div className=" cover database">
                                        <p>PostGreSQl</p>
                                    </div>
                                </div>
                                
                                <div className="div-1">
                                    <img src={html} alt="html" />
                                    <div className="cover html">
                                        <p>HTML</p>
                                    </div>
                                </div>
                                <div className="div-1">
                                    <img src={css} alt="css" />
                                    <div className="cover css">
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className="div-1">
                                    <img src={ds} alt="ds" />
                                    <div className="cover ds">
                                        <p>Data Structure</p>
                                    </div>
                                </div>
                                <div className="div-1">
                                    <img src={algo} alt="algo" />
                                    <div className="cover algo">
                                        <p>NetWorking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-3">
                            <div className="row-3-div">
                                <div className="row-3-div-1">
                                    <div className="div-1">
                                        <img src={mongo} alt="MongoDb" />
                                        <div className="cover mongoDb">
                                            <p>Mongo DB</p>
                                        </div>
                                    </div>
                                    <div className="div-1">
                                        <img src={mern} alt="mern stack" />
                                        <div className="cover mern-stack">
                                            <p>MERN Stack</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-3-div-2">
                                    <div className="div-1">
                                        <img src={networking} alt="networking" />
                                        <div className="cover networking">
                                            <p>Algo</p>
                                        </div>
                                    </div>
                                    <div className="div-1">
                                        <img src={os} alt="os" />
                                        <div className="cover os">
                                            <p>OS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          
                    </div>
                    <div className="tools">
                        <div className="heading">
                            <h1 style={{color:'white'}}>Working Tools</h1>
                        </div>
                        <div className="tools-set">
                            <div className="tool-row-1">
                                <div className="tool-row-1-div-1 ">
                                    <div className="div-1">
                                        <img src={vscode} alt="vscode" />
                                        <div className="tool-cover vscode">
                                            <p>VS Code</p>
                                        </div>
                                    </div>
                                    <div className="div-1">
                                        <img src={postman} alt="postman" />
                                        <div className="tool-cover postman">
                                            <p>Postman</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tool-row-1-div-2 ">
                                    <div className="div-1">
                                        <img src={github} alt="github" />
                                        <div className="tool-cover github">
                                            <p>Github</p>
                                        </div>
                                    </div>
                                    <div className="div-1">
                                        <img src={render} alt="render" />
                                        <div className="tool-cover render">
                                            <p>Render</p>
                                        </div>
                                    </div> 
                                </div>
                                <div className="tool-row-1-div-3 ">
                                    <div className="div-1">
                                            <img src={atom} alt="atom" />
                                            <div className="tool-cover atom">
                                                <p>Atom</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About; // it will export the default module the another module in the backend server!