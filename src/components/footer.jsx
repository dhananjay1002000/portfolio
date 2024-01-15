import { useEffect, useState } from "react";
import github from '../images/github-2.png'
import whatsapp from '../images/whatsapp-2.png'
import linkdin from '../images/linkdin-2.png'
import gmail from '../images/gmail-3.png'

function Footer(){
    const[date , setDate] = useState();
    useEffect(()=>{
        setDate(()=>{
            return new Date().getFullYear();
        })
    },[])
    const handleGmail = ()=>{
        const recipientEmail='meshramdhananjay1@gmail.com';
        const subject = 'Subject of the email';
        const body = 'Body of the email';
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }
    return(
        <div className="foot">
            <div className="comment" style={{color:'white'}}>
                <p>Designed and Developed by Dhananjay Meshram</p>
                <p>copyright © {date}</p>
                
            </div>
            <div className="social-links">
                <p><img src={github} alt="github" onClick={()=>{
                                window.open('https://github.com/dhananjay1002000')
                            }}/></p>
                <p><img src={whatsapp} alt="whatsapp"  className='tooltip-trigger' />
                    <div className="tooltip-text">9575071098</div>
                </p>
                <p><img src={linkdin} alt="linkdin" onClick={()=>{
                                window.open('https://www.linkedin.com/in/dhananjay-meshram-a87487214/')
                            }} /></p>
                <p><img src={gmail} alt="gmail" onClick={handleGmail}  /></p>
            </div>
        </div>
    )
}

export default Footer;