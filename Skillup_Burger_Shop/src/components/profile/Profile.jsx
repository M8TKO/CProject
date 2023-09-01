import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Profile = (props) => {
  const options = {
    initial: {
      opacity: 0
  },
  whileInView: {
      opacity: 1
  },
  transition: {
      duration: 1.2
  }
  };
  return (
    <section className="profile py-4">
      <main>
        <motion.img src={me} alt="User" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          {props.user.name}
        </motion.h5>
      
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>

        <Link to="/">
          <motion.button
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            onClick={props.logout}
          >
            Logout
          </motion.button>
        </Link>
      </main>
    </section>
  );
};

export default Profile;
