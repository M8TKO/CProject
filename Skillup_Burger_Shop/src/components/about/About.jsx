// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpg";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { motion } from "framer-motion";
import FadeIn from 'react-fade-in';

const About = () => {
    const title_options = {
        initial: {
            y: "-100%",
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        }
    };

    const firstP_options = {
        ...title_options,
        transition: {
            delay: 0.4,
            duration: 0.5
        }
    };

    const secondP_options = {
        ...title_options,
        transition: {
            delay: 1,
            duration: 0.4
        }
    };

    const icon_options = {
        ...title_options,
        transition: {
            delay: 1.4,
            duration: 0.4
        }
    };

    const founder_options = {
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
    <section className="about">
        <main>
            <h1 className="pt-4">About Us</h1>
            <article>
                <motion.h4 {...title_options}>Burger Shop</motion.h4>
                <motion.p className="mb-3" {...firstP_options}>
                    This is Burger Shop. The place for most tasty burgers on the
                    enitre earth.
                </motion.p>
                <motion.p {...secondP_options}>
                    Explore the various type of food and burgers. Click below to see the
                    menu
                </motion.p>

                <motion.div {...icon_options}>
                    <Link to="../#menu">
                        <FastfoodIcon className="mt-4" fontSize="large"/>
                    </Link>
                </motion.div>
            </article>
            
            <motion.div className="mb-5" {...founder_options}>
                <h2>Founder</h2>
                <article>
                <div>
                    <img src={me} alt="Founder" />
                    <h3>Matko</h3>
                </div>
                <p>
                    I am Matko, the founder of Burger Shop. Affiliated to
                    God Taste...
                </p>
                </article>
            </motion.div>
        
        </main>
    </section>
    );
};
export default About;
