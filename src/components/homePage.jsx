import dev_13 from '../images/dev_13.png'
import dev_12 from '../images/dev-12.png'
import {useTypewriter} from 'react-simple-typewriter'
import github from '../images/github-2.png'
import whatsapp from '../images/whatsapp-2.png'
import linkdin from '../images/linkdin-2.png'
import gmail from '../images/gmail-3.png'

function HomePage(){

    const [typeEffect] = useTypewriter ({
        words:[' MERN Stack Developer','Engineer','and a Designer'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80
        
    })
    const handleGmail = ()=>{
        const recipientEmail='meshramdhananjay1@gmail.com';
        const subject = 'Subject of the email';
        const body = 'Body of the email';
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

   

    return(
        <div className="container">
            <div className="home-wrapper-1 ">
                <div className="para">
                    <div className="para-1">
                        <h1 style={{color:'white'}}>
                            Hi there! <br />
                            I am <span style={{color:" #66FCF1"}}>Dhananjay Meshram</span>
                        </h1>
                    </div>
                    <div className="para-2">
                            <p><span style={{color:'white'}}>{typeEffect}</span></p>
                    </div>
                </div>
                <div className="img-con">
                    {/* <img src={dev_13} alt="image of dev" /> */}
                    <div class="cube-container">
                        <div class="cube">
                            <div class="face"></div>
                            <div class="face"></div>
                            <div class="face"></div>
                            <div class="face"></div>
                            <div class="face"></div>
                            <div class="face"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-wrapper-2">
                <div className="img-con">
                    <img src={dev_12} alt="profile circle" />
                </div>
                <div className="para">
                   
                    <h1 style={{color:'white'}}>Eat Sleep <span style={{color:'#392467'}}>Develop</span> Repeat</h1>
                   
                </div>
                
            </div>
            <div className="contact">
                <div className="con-info">
                    <div className="ball"></div>
                    <div className="con-para">
                        <p>FIND ME ON</p>
                        <p>feel free to contact with me on</p>
                    </div>
                    <div className="con-img">
                        <ul>
                            <li><img src={github} alt="github" onClick={()=>{
                                window.open('https://github.com/dhananjay1002000')
                            }} /></li>
                            <li><img src={whatsapp} alt="whatsapp" className='tooltip-trigger' />
                                <div className="tooltip-text">9575071098</div>
                            </li>
                            
                            <li><img src={linkdin} alt="linkdin" onClick={()=>{
                                window.open('https://www.linkedin.com/in/dhananjay-meshram-a87487214/')
                            }} /></li>                       
                            <li><img src={gmail} alt="gmail" onClick={handleGmail} /></li>
                        </ul>
                        
                    </div>    
                    
                    
                </div>
                
            </div>
        </div>
    )
}
export default HomePage;