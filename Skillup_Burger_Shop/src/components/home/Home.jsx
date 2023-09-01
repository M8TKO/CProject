import React from "react";
import Founder from "./Founder";
import Menu from "./Menu.jsx";
import { IoFastFoodOutline } from "react-icons/io5"; 
import { motion } from "framer-motion";

const Home = (props) => {

    const h1_options = {
        initial: {
            x: "-100%",
            opacity: 0
        },
        whileInView: {
            x: 0,
            opacity: 1
        }
    };


    const p_options = {
        initial: {
            x: "100%",
            opacity: 0,
        }
         ,
        whileInView: {
              x: 0,
             opacity: 1,
         },

    };
    return (
        <>
        <section className="home">
            <div>
                <motion.h1 {...h1_options}>Burger Shop</motion.h1>
                <motion.p
                    {...p_options}
                    transition={{
                    delay: 0.2,
                    }}
                    >
                Give yourself a tasty burger.
                </motion.p>
            </div>
           
                <motion.a
                href="#menu"
                initial={{
                y: 200,
                opacity: 0,
                }}
                whileInView={{
                y: 0,
                opacity: 1,
                }}
                transition={{
                delay: 0.4,
                }}
                >
                Explore Menu 
                </motion.a>
            
            
            </section>
        <Menu 
        handler1={props.handler1} 
        handler2={props.handler2}
        handler3={props.handler3}
        />
        <Founder />
        </>
        );
    };
    export default Home;

