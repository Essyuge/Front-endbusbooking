import React from 'react';
import {Link} from "react-router-dom"

 function Home({setLogInStatus}) {

  return (
    <header>
      <Link to="/">
    <button className='branding'>
   <div onClick={()=>setLogInStatus({loggedIn: false, admin: false})}> Home</div>
        </button>
        </Link>
      <div className='navigation'>

      
      <Link to="/buses">
      <button style={{color: "lack"}} className='btn'>Buses</button>
      </Link>
      {/* <Link to="/bookings">
      <button  style={{color: "black"}} className='btn'>Bookings</button>
      </Link> */}
      <Link to="/ticket">
      <button style={{color: "black"}} className='btn'>Ticket</button>
      </Link>

      <Link to="/">
      <button style={{color: "white"}} onClick={()=>setLogInStatus({loggedIn: false, admin: false})}>LogOut</button>
      </Link>
        </div>
     
    </header>
   
  )
}

export default Home