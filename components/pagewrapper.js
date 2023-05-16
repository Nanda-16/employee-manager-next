"use client";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
    fadeIn: {
        y: 100,
        opacity: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    inactive: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    fadeOut: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};

export const PageWrapper = ({ children }) => (
    <>
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial="fadeIn"
                animate="inactive"
                exit="fadeOut"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
);