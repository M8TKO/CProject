// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const Header = (props) => {
return (
<nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <Link to="/cart">
    <FiShoppingCart />
    </Link>
    <DropdownMenu loggedUser={props.loggedUser} logout={props.logout}/>
</nav>
);
};
export default Header;