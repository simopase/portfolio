'use client';
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import css from "./Home.module.css";

const Home = () => {

    const texts = ["HI", "I AM SIMONE", "WEB DEVELOPER"];
    const [step, setStep] = useState(0);
    const [wrapper, animateWrapper] = useAnimate()

    useEffect(() => {
        const currentText = texts[step];
        const totalDuration = currentText.length * 100 + 700;

        const timeout = setTimeout(() => {
            if (step < texts.length - 1) {
                setStep(step + 1);
            } else {
                console.log("animationStart")

                animateWrapper(wrapper.current, { x: "-50%"}, { duration: 1, ease: "easeInOut" });
            }

        }, totalDuration);

        return () => clearTimeout(timeout);

    }, [step]);

    return (
        <motion.div className={css.wrapper} ref={wrapper} initial={{ x: "0%" }}>


            <motion.div className={css.first}>
                <AnimatePresence mode="wait">
                    <AnimatedLetters key={texts[step]} text={texts[step]} />
                </AnimatePresence>
            </motion.div>
            <div className={css.second}>2</div>
        </motion.div >
    )





}
export default Home;