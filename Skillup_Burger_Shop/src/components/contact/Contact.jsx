import React from "react";
import { delay, motion } from "framer-motion";
import burger1 from "../../assets/contact/burger1.png";
import burger2 from "../../assets/contact/burger2.png";
import burger3 from "../../assets/contact/burger3.png";
import FadeIn from 'react-fade-in';
import Popup from 'reactjs-popup';
 {/* <motion.div
            className="formBorder"
            initial={{
                x: "100vw",
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{ delay: 0.2 }}
            /> */}
        {/* <motion.div
            initial={{
                y: "-100vh",
                x: "50%",
                opacity: 0,
            }}
            animate={{
                x: "50%",
                y: "-50%",
                opacity: 1,
            }}
            transition={{
            
            }}
            >
            <img src={burger} alt="Burger" />
        </motion.div> */}



const Contact = () => {
    const row1 = {
        initial: {
            y: "-200px",
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        }
    };
    const row2 = {
        initial: {
            y: "-200%",
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        transition: {
            delay: 0.4
        }
    };
    const row3 = {
        initial: {
            y: "-300%",
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        transition: {
            delay: 0.8
        }
    };

    return (
    <section className="contact">
        <div>
            <motion.img {...row1} src={burger1} alt="burger"/>
            <motion.img {...row2} src={burger2} alt="burger"/>
            <motion.img {...row3} src={burger3} alt="burger"/>
        </div>
        <FadeIn>
            <motion.form
                // initial={{
                //     y: "-100vw",
                //     opacity: 0,
                // }}
                // animate={{
                //     y: 0,
                //     opacity: 1,
                // }}
                // transition={{ delay: 0.8 }}
                >
                <h2>Contact Us</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message..." cols="30" rows="10"></textarea>
                <Popup trigger=
                {<button type="button">Send</button>}
                >
                <div style={{color:"red", transform: 'translate(25%,-700%)',
                backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
                Thank you for cotacting us! We will get back to you shortly.
                </div>
                </Popup>
            </motion.form>
        </FadeIn>

        <div>
            <motion.img {...row1} src={burger1} alt="burger"/>
            <motion.img {...row2} src={burger2} alt="burger"/>
            <motion.img {...row3} src={burger3} alt="burger"/>
        </div>
    </section>
    );
};
export default Contact;

