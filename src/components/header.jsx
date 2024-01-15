import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Header(){
    const [showMenu , setShowMenu] = useState(false);
    const [windowWidth , setWindowWidth] = useState(0);

   
    const toggle = ()=>{
        setShowMenu(!showMenu);
    }
    // const toggle = ()=>{
       
    //    const menuclass = document.getElementsByClassName('header-con');
    //    setWindowWidth(()=>{
    //     return window.innerWidth;
    //    })
    //    if(menuclass === 'header-con' && windowWidth >= 1300){
    //     setShowMenu(false);
    //    }
    //    else{
    //     setShowMenu(!showMenu);
    //     }
       
    // }

    // const classToggle = ()=>{
    //     setWindowWidth(()=>{
    //         return window.innerWidth;
    //     })
    //     const menuClass = document.getElementsByClassName('show');
    //     if(menuClass === 'show' && windowWidth >= 1300){
    //         toggle();
    //     }  
    // }

    


    return(
        <div className="header">
            <div className="resp_menu">
                <div className="menu-icon" onClick={toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            </div>
            <div className={showMenu ? "show": "header-con"}>
                    <div className="link-1"><Link to={"/"} className='link' onClick={toggle} >Home</Link></div>
                    <div className="link-1"><Link to={"/About"} className='link'onClick={toggle}>About</Link></div>
                    <div className="link-1"><Link to={"/Projects"} className='link'onClick={toggle}>Projects</Link></div>
                    <div className="link-1"><Link to={"/Resume"} className='link'onClick={toggle}>Resume</Link></div>
            </div>
        </div>
    )
}
export default Header;