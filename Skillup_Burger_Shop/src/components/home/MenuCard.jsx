import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 ,axis = "x", direction = "100%"}) => {
  const [bought,setBought] = useState(false);

  return (
    <motion.div
      className="menuCard"
      initial={{
      [axis]: direction,
      opacity: 0,
      }}
      whileInView={{
        [axis]: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>{price}€</h5>

        <p>{title}</p>

        <button onClick={ () => {
          if( bought === false )
          {setBought(true);
          handler(1);}
        } }>{ bought ? "Added to cart!" : "Buy Now"}</button>
       
            

        
      </main>
    </motion.div>
  );
};

export default MenuCard;
