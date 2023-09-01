import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";



const Menu = (props) => {


return (
    <section id="menu">
        <div className="pb-4">
        <h1>MENU</h1>
        </div>
        
        <div>
            <MenuCard
                itemNum={1}
                burgerSrc={burger1}
                price={4}
                title="Cheese Burger"
                handler={  props.handler1 }
                direction="-100%"
            />
            <MenuCard
                itemNum={2}
                burgerSrc={burger2}
                price={5}
                title="Veg Cheese Burger"
                delay={0.1}
                handler={props.handler2}
                axis="y"
                direction="40%"
            />
            <MenuCard
                itemNum={3}
                burgerSrc={burger3}
                price={8}
                title="Cheese Burger with French Fries"
                handler={props.handler3}
            />
        </div>
    </section>
);
};
export default Menu;
;

