import React from "react";
import { motion } from "motion/react";
import css from "./AnimatedLetters.module.css";

const AnimatedLetters = ({ text }: { text: string }) => {

    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            key={text}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={css.title}
        >
            {letters.map((char, index) => (
                <motion.span key={index} variants={letter}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );
};
export default AnimatedLetters;