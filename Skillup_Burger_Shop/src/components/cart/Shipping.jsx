import React, { useEffect, useState } from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = (props) => {

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() +1;
  const year = date.getFullYear();
  
  var newOrder = {
    name: props.loggedUser.name,
    email: props.email,
    houseNum: "",
    city: "",
    country: "",
    state: "",
    pinCode: "",
    phone: "",
    id: props.id,
    itemQty: props.itemQty,
    amount: props.amount,
    subTotal:props.subTotal,
    burger1: props.getBurger1,
    burger2: props.getBurger2,
    burger3: props.getBurger3,
    tax: props.tax,
    date: day + "." + month + "." + year
  };

  

  const [country,setCountry] = useState("IN");



  useEffect(() => {
    newOrder.country = country;
  }
  ,[country]);

  return (
    <section className="shipping py-3">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>Country</label>
            <select onChange={(e) =>{  setCountry(e.target.value); }}>
              <option>Country</option>
              {Country && Country.getAllCountries().map((i) => (
              <option value={i.isoCode} key={i.isoCode} >
              {i.name}
              </option>
              ))}
                  
            </select>
          </div>
          <div>
          
            <label>State</label>
            <select onChange={(e) =>{ newOrder.state = e.target.value;}}>
              <option value="">State</option>
              {State && State.getStatesOfCountry(country).map((i) => (
              <option value={i.isoCode} key={i.isoCode}>
              {i.name}
              </option>
              ))}
            </select>
          </div>
          <div>
            <label>House Num</label>
            <input type="text" placeholder="Enter House No." onChange={(e) =>{ newOrder.houseNum = e.target.value;}}/>
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" onChange={(e) =>{ newOrder.city = e.target.value;}}/>
          </div>
          
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" onChange={(e) =>{ newOrder.pinCode = e.target.value;}}/>
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No."onChange={(e) =>{ newOrder.phone = e.target.value;}} />
          </div>         
          <Link to="/myorders">
            <button type = "button" href="/myorders" className="btn btn-success mt-4 btn-lg" onClick={(e) => {
              props.setOrders( (prev) => [...prev,newOrder]);
            }}>Confirm order</button>
          </Link>
          
        </form>
      </main>
    </section>
  );
};

export default Shipping;
