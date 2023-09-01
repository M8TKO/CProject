import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState , useEffect } from "react";
import Home from "./components/home/Home.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import Menu from "./components/home/Menu.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cart from "./components/cart/Cart.jsx";
import Shipping from "./components/cart/Shipping.jsx";
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
import MyOrders from "./components/myOrders/MyOrders.jsx";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import About from "./components/about/About.jsx";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";


function App() {

  const [registeredUsers,setRegisteredUsers] = useState([]);
  const [loggedUser,setLoggedUser] = useState({})

  const [burger1,setBurger1] = useState(0);
  const [burger2,setBurger2] = useState(0);
  const [burger3,setBurger3] = useState(0);

  const [subTotal,setSubTotal] = useState(0);
  const [tax,setTax] = useState(0);
  const [total,setTotal] = useState(0);

  const [orders,setOrders] = useState([]);


  function handleBurger1(x) {
    if( x === -1 && burger1 === 0 ) return;
    setBurger1(() => (burger1+x));
  }

  function handleBurger2(x) {
    if( x === -1 && burger2 === 0 ) return;
    setBurger2( () => (burger2+x));
  }

  function handleBurger3(x) {
    if( x === -1 && burger3 === 0 ) return;
    { setBurger3(() => (burger3+x));}
  }

  useEffect( () => {
    setSubTotal(() => (burger1*4 + burger2*5 + burger3*8) );
  } , [burger1,burger2,burger3]);

  useEffect( () => {
    setTax((0.15*(burger1*4 + burger2*5 + burger3*8)).toFixed(2));
  } , [burger1,burger2,burger3]);

  useEffect( () => {
    const s = (burger1*4 + burger2*5 + burger3*8);
    const t = (0.15*(burger1*4 + burger2*5 + burger3*8));
    setTotal( (s + t + 1).toFixed(2) );
  } , [burger1,burger2,burger3]);

  useEffect( () => {
    console.log(orders);
  } , [orders]);

  function handleNewUser(newUser){
    for( var i = 0 ; i < registeredUsers.length ; i++){
      if( newUser.email === registeredUsers[i].email ) return false;
    }
    setRegisteredUsers( (prev) => [...prev,newUser]); 
    setLoggedUser(newUser);
    return true;
  }

  function handleNewLogin(user){

    for( var i = 0 ; i < registeredUsers.length ; i++ ){
      if( user.email === registeredUsers[i].email && user.pass === registeredUsers[i].pass){
        setLoggedUser(registeredUsers[i]);
        return true;
      }
    }
    return false;
  }

  useEffect( () => {
    
  } , [registeredUsers]);

  useEffect( () => {
    
  } , [loggedUser]);




  return (
    <Router>
      <Header isAuthenticated={true} loggedUser={loggedUser} logout={ () => setLoggedUser({}) }/>
      <Routes>
        <Route path="/" element={<Home 
        handler1={handleBurger1}
        handler2={handleBurger2}
        handler3={handleBurger3}
        />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart 
        handler1={handleBurger1}
        handler2={handleBurger2}
        handler3={handleBurger3}
        getBurger1={burger1} 
        getBurger2={burger2}
        getBurger3={burger3}
        subTotal={subTotal}
        tax={tax}
        total={total}
        loggedUser={loggedUser}
        />}/>
        <Route path="/shipping" element={<Shipping 
        email={loggedUser.email}
        setOrders={setOrders} 
        itemQty={burger1+burger2+burger3}
        id={orders.length + 1}
        amount={total}
        tax={tax}
        subTotal={subTotal}
        getBurger1={burger1} 
        getBurger2={burger2}
        getBurger3={burger3}
        loggedUser={loggedUser}
        />} />
        <Route path="/login" element={<Login addNewUser={handleNewUser} newLogin={handleNewLogin}/>} />
        <Route path="/myorders" element={<MyOrders 
        orders={orders}
        email={loggedUser.email}
        />} />
        <Route path="/me" element={<Profile user={loggedUser} logout={ () => setLoggedUser({}) }/>} />
        <Route path="/order/:id" element={<OrderDetails orders={orders}/>} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
