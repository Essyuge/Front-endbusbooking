import React from 'react';
import {Link} from "react-router-dom"

 function Header({setLogInStatus}) {
  

  return (
    <header>
      <Link to ="/">
    <button className='branding'>
   <div onClick={()=>setLogInStatus({loggedIn: false, admin: false})}> Home</div>
        </button>
        </Link>
      <div className='navigation'>

      <Link to="/admin/home">
      <button style={{color: "black"}} className='btn'>DashBoard</button>
      </Link>
      <Link to="/admin/bus">
      <button  style={{color: "black"}} className='btn'>Buses</button>
      </Link>
      <Link to="/admin/routes">
      <button  style={{color: "black"}} className='btn'>Routes</button>
      </Link>
    
      <Link to="/admin/bookings">
      <button  style={{color: "black"}} className='btn'>Bookings</button>
      </Link>

      <Link to="/">
      <button style={{color: "white"}} onClick={()=>setLogInStatus({loggedIn: false, admin: false})}>LogOut</button>
      </Link>
        </div>
     
    </header>
   
  )
}

export default Header