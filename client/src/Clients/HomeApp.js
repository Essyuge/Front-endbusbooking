import React from 'react'
import {Routes,Route} from "react-router-dom"
import SeatSelection from '../components/Seats/SeatSelection';
import BookingForm from './BookingForm';
import BusList from './BusesList';
// import Home from "./Home";
import Homepage from './Homepage';
import PaymentTab from "./Payment/PaymentTab";
import TicketPage from './TicketPage/TicketPage';

function HomeApp({setAdmin}) {
  return (
    <>
      {/* <Home/> */}
    <Routes >
    
     <Route exact  path ='/buses' element ={<BusList/>}></Route>
     <Route exact  path ='/bookings' element ={<BookingForm/>}></Route>
     <Route exact path ='/seat-selection' element ={<SeatSelection/>}></Route>
     <Route exact path ='/payment' element ={<PaymentTab/>}></Route>
     <Route exact path ='/ticket' element ={<TicketPage/>}></Route>
    {/* <Route   path ='/' element ={<Homepage setAdmin={setAdmin}/> }></Route> */}
    
  
     </Routes>
     </>
  )
}

export default HomeApp
