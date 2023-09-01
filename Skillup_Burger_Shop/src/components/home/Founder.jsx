import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
const Founder = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
    },
  };

  return (
    <section className="founder" >
      <motion.div {...options} transition={{duration: 1.3}}>
        <motion.img src={me} alt="Founder" height={200} width={200}  />
        <h2>Matko</h2>

        <p>
          Hey, Everyone I am Matko, the founder of Burger Shop.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
