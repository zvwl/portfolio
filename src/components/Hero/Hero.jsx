import React from "react";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contactButtonHover = {
    scale: 1.08,
    y: -3,
    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  const downloadButtonHover = {
    scale: 1.08,
    y: -3,
    boxShadow: "0 10px 25px rgba(74, 144, 226, 0.5)",
    background: "linear-gradient(135deg, #5ba0f2, #4689d0)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  const buttonTap = {
    scale: 0.95,
    y: 0
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.content}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className={styles.title}
          variants={textVariants}
        >
          Hi, I'm Daniel
        </motion.h1>
        <motion.p 
          className={styles.description}
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          IT Support & Cyber Security Graduate with expertise in penetration testing, 
          network analysis, and security operations. Currently pursuing CREST certification 
          with hands-on experience in technical security support.
        </motion.p>
        <motion.div 
          className={styles.buttonContainer}
          variants={buttonVariants}
        >
          <motion.a 
            href="mailto:daniel.holecek50@gmail.com" 
            className={styles.contactBtn}
            whileHover={contactButtonHover}
            whileTap={buttonTap}
            initial="visible"
          >
            Contact Me
          </motion.a>
          <motion.a 
            href="/Daniel_Holecek_CV.pdf" 
            download="Daniel_Holecek_CV.pdf"
            className={styles.downloadBtn}
            whileHover={downloadButtonHover}
            whileTap={buttonTap}
            initial="visible"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.img
        src={getImageUrl("hero/profile-picture.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
