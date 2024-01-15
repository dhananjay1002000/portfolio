import todo from '../../images/todo.jpg'
import notes from '../../images/notes.png'
import chat from '../../images/chat.jpg'
import emp from '../../images/emp.jpg'
import ping from '../../images/ping.png'
import { Link } from 'react-router-dom';
function Projects(){
    return(
       <div className="abt-wrapper">
            <div className="skills">
                <div className="heading">
                    <h1>My Recent <span style={{color:'#392467'}}>Projects</span></h1>
                </div>
                <div className="sm-heading">
                    <h3>
                        Here are a few projects I've worked on 
                    </h3>
                </div>
                <div className="skill-set">
                        <div className="pro-row-1">
                            <div className="div-2">
                                <div className="img-div">
                                    <img src={todo} alt="todo" />
                                </div>
                                <div className="pro-dis">
                                    <h2>Todo List</h2>
                                    <p>A full CRUD web app to manage our daily todos in a  specific order. </p>
                                </div>
                                <div className="btn-div">
                                    <button onClick={()=>{
                                        window.open("https://github.com/dhananjay1002000/todo-2.0-api","_blank");
                                    }} >Github</button>
                                    <button onClick={()=>{
                                        window.open('https://todo-nmof.onrender.com/', '_blank');
                                    }} >Demo</button>
                                </div>
                            </div>
                            <div className="div-2">
                                <div className="img-div">
                                    <img src={notes} alt="notes" />
                                </div>
                                <div className="pro-dis">
                                    <h2>Keeper</h2>
                                    <p> A full CRUD web app to keep track of our notes and to easily manage them. </p>
                                </div>
                                <div className="btn-div">
                                    <button onClick={()=>{
                                        window.open("https://github.com/dhananjay1002000/keeper","_blank")
                                    }}>Github</button>
                                    <button onClick={()=>{
                                        window.open("https://keeper-app-v1.onrender.com","_blank");
                                    }} >Demo</button>
                                </div>
                            </div>
                            <div className="div-2">
                                <div className="img-div">
                                    <img src={chat} alt="chat app" />
                                </div>
                                <div className="pro-dis">
                                    <h2>Chatfy</h2>
                                    <p>A full fledge chat room to have some chat and fun.</p>
                                </div>
                                <div className="btn-div">
                                    <button onClick={()=>{
                                        window.open("https://github.com/dhananjay1002000/chatApp","_blank");
                                    }}>Github</button>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="pro-row-2 pro-row-2-2">
                            <div className="div-2-con">
                                <div className="div-2">
                                    <div className="img-div">
                                        <img src={emp} alt="emp" />
                                    </div>
                                    <div className="pro-dis">
                                        <h2>Manager</h2>
                                        <p> A full CRUD web app to manage and sort emplyoees without any chaos. </p>
                                    </div>
                                    <div className="btn-div">
                                        <button onClick={()=>{
                                            window.open("https://github.com/dhananjay1002000/CRUDEmp","_blank");
                                        }} >Github</button>
                                        
                                    </div>
                                </div>
                                <div className="div-2">
                                <div className="img-div">
                                    <img src={ping} alt="todo" />
                                </div>
                                <div className="pro-dis">
                                    <h2>Tennis</h2>
                                    <p>A ping pong game based on core java script CSS and HTML. </p>
                                </div>
                                <div className="btn-div">
                                    <button onClick={()=>{
                                        window.open("https://github.com/dhananjay1002000/pingPong","_blank");
                                    }} >Github</button>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
       </div>
    )
}

export default Projects;