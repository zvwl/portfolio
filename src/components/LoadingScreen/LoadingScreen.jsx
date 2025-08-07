import React from "react";
import { motion } from "framer-motion";
import styles from "./LoadingScreen.module.css";

export const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          variants={textVariants}
        >
          Daniel Holecek
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          variants={textVariants}
        >
          Cyber Security Specialist
        </motion.p>

        <motion.div 
          className={styles.loadingBar}
          variants={textVariants}
        >
          <motion.div 
            className={styles.progress}
            variants={progressVariants}
          />
        </motion.div>

        <motion.div 
          className={styles.dots}
          variants={textVariants}
        >
          <motion.div 
            className={styles.dot}
            variants={dotVariants}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div 
            className={styles.dot}
            variants={dotVariants}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.2
            }}
          />
          <motion.div 
            className={styles.dot}
            variants={dotVariants}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.4
            }}
          />
        </motion.div>
      </div>

      <div className={styles.backgroundBlur} />
    </motion.div>
  );
};
