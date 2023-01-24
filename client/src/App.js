import React, {useState} from "react";

import { Routes, Route} from "react-router-dom";
import HomeApp from './Clients/HomeApp';
import "./Clients/index.css"
import BusApp from "./buses/BusApp";
import "./buses/index.css"
import Header from "./buses/Header";
import Home from "./Clients/Home";
import Homepage from "./Clients/Homepage";

// import AdminLogin from './components/Auth/AdminLogin'
// import AdminSignUp from "./components/Auth/AdminSignUp";


function App() {
  const [logInStatus, setLogInStatus] = useState({loggedIn: false, admin: false})
  // const [userType, setUserType] = useState(localStorage.getItem("userType"))
  // const navigate = useNavigate()

  // useEffect(()=>{
  //   fetch('/admin-me')
  //   .then(res => {
  //     if(res.ok){
  //       setLoggedIn(true)
  //     }
  //   })

  //   fetch('get admin me link')
  //   .then(res => {
  //     if(res.ok){
  //       setLoggedIn(true)
  //     }
  //   })
  // } ,[])


  return (
    <>
      {/* {
        loggedIn?(
          localStorage.getItem("userType") === "admin" ?
          <>
            <Header loggedIn={loggedIn}/> 
            <Home loggedIn={loggedIn}/> 
          </>:
          <>
            <HomeApp loggedIn={loggedIn}/>
            <BusApp loggedIn={loggedIn}/>
          </>
        ): 
        <Routes >
          <Route exact path='/' element ={<AdminLogin/>}></Route>
          <Route exact path='/admin/signup' element={<AdminSignUp />}></Route>
        </Routes>
      } */}
       {/* <Home/> */}
       {
        logInStatus.loggedIn?
        <>
          {logInStatus.admin? 
            <>
              <Header setLogInStatus={setLogInStatus}/> 
              <BusApp />
            </> :
            <>
              <Home setLogInStatus={setLogInStatus}/>
              <HomeApp />
            </>
           }
        </> :
        <>
            <Homepage logInStatus={logInStatus} setLogInStatus={setLogInStatus}/>
          {/* // <Routes >
          //   <Route path='/' element={ */}
          {/* // </Routes> */}
        </>
       }   

    </>
  );
}

export default App;
