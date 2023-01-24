import React from 'react';
import './Homepage.css';
import { useNavigate} from "react-router-dom"


export default function Homepage({logInStatus, setLogInStatus}) {
    const navigate = useNavigate()

    // if(logInStatus.loggedIn && logInStatus.admin){
    //     navigate('/admin/home')
    // }else if(logInStatus.loggedIn && !logInStatus.admin) {
    //     navigate('/buses')
    // }

    function logInAsAdmin(){
        setLogInStatus({loggedIn: true, admin: true})
        navigate('/admin/home')
        console.log("wer are here")
    }

    function logInAsUser(){
        setLogInStatus({loggedIn: true, admin: false})
        navigate('/buses')
    }

    return (
       <div>
       
        <div className="homepage">
            <div className="header-nav">
                <span className="mytext1">Knight Travellers</span>
                
            </div>

            <div></div>

            <div className="container">
                <div className="slogan">
                    <h1>
                        <span className="cc">ALWAYS TRAVEL</span>
                        <div className="message">
                            <div className="word1">uniquely</div>
                            <div className="word2">safely</div>
                            <div className="word3">with a smile</div>
                        </div>
                    </h1>
                </div>

                <div className="mainBtn" onClick={logInAsUser}>
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="black" />
                                <stop offset="100%" stopColor="black" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                  <span >User</span> 
                  </div>
                <div className="mainBtn" onClick={logInAsAdmin}>
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="black" />
                                <stop offset="100%" stopColor="black" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                  <span>Admin</span> 
                
                </div>
            
            </div>
        </div>
        </div>
        
    )
}
