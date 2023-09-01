import React from "react";
import { Link } from "react-router-dom";
import cheese from "../../assets/cheese.png";
import plant from "../../assets/plant.png";
import french_fries from "../../assets/french-fries.png";
import { useState ,useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function third(title){
  if( title === "Cheese Burger with French Fries" ) 
  return <img src={french_fries} alt="Item"/>
}

const CartItem = ({ value, title, img , increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item"/>
      {third(title)}
    </div>

    <div class="right">
      <RemoveIcon onClick={decrement} fontSize="large" className="minus"/>
      <input type="number" readOnly value={value} />
      <AddIcon onClick={increment} fontSize="large" className="plus"/>
    </div>
  </div>
);



const Cart = (props) => {

 

  return (
    <section className="cart py-5">
      <main>
        <CartItem
        className="pt-0"
          title={"Cheese Burger"}
          img={cheese}
          value={props.getBurger1}
          increment={ () => { props.handler1(1) }}
          decrement={() => { props.handler1(-1) }}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={plant}
          value={props.getBurger2}
          increment={ () => { props.handler2(1) }}
          decrement={() => { props.handler2(-1) }}
       
        />

        <CartItem
          title={"Cheese Burger with French Fries"}
          img={cheese}
          value={props.getBurger3}
          increment={ () => { props.handler3(1) }}
          decrement={() => { props.handler3(-1)  }}
        />

       

        <article>
          <div className="mb-1 pt-2">
            <h4>Sub Total</h4>
            <p>{props.subTotal}€</p>
          </div>
          <div className="mb-1 pt-2">
            <h4>Tax</h4>
            <p>{props.tax}€</p>
          </div>
          <div className="mb-1 pt-2">
            <h4>Shipping Charges</h4>
            <p>{1}€</p>
          </div>{" "}
          <div className="pt-2">
            <h4>Total</h4>
            <p>{props.total}€</p>
          </div>
          <Link to={ Object.keys(props.loggedUser).length === 0 ? "/cart" : "/shipping"} className="mt-3">{ Object.keys(props.loggedUser).length === 0 ? "You have to login if you want to order." : "Checkout"}</Link>
        </article>
      </main>
    </section>
  );
};


export default Cart;

