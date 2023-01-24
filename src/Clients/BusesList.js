import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BusesList.css"
// import "./BusesList1.css"

const BusList= () => {
    const [empdata, empdatachange] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      fetch("/routes").then((res) => {
          return res.json();
      }).then((resp) => {
          empdatachange(resp);
      }).catch((err) => {
          console.log(err.message);
      })
    }, [])
  
    const filtereddata = empdata && empdata.filter((val) => {
      if(searchTerm === ""){
        return val;
      }else if(val.to.toLowerCase().includes(searchTerm.toLowerCase())){
        return val;
      }
    });
  
    return (
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2 style={{color:"black"}}>Available Buses</h2>
          </div>
          <input style={{backgroundColor:"#eee0cb"}} id="searchInput" type="text" 
            placeholder="Search your destination..." 
            onChange={(e)=>{setSearchTerm(e.target.value)}}
          />
          <div className="card-body">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>ID</td>
                  <td>Bus</td>
                  <td>Pick-Up</td>
                  <td>Destination</td>
                  <td>Bus No</td>
                  <td>Date</td>
                  <td>Time</td>
                  <td>Amount</td>
                  <td>Book</td>
                </tr>
              </thead>
              <tbody>
                {filtereddata &&
                  filtereddata.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{ <img style ={{ width: "100px",height:" 70px"}} src={item.image} alt={item.busnumber} />}</td>
                      <td>{item.from}</td>
                      <td>{item.to}</td>
                      <td>{item.busnumber}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.cost}</td>
                      <td><Link to="/bookings" onClick={() => { }} className="btn btn-success">Book Now</Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

export default BusList;