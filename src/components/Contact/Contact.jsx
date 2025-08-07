import React from "react";
import { motion } from "framer-motion";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Contact = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      ref={elementRef}
      id="contact" 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div className={styles.text} variants={itemVariants}>
        <h2>Contact</h2>
        <p>Feel free to reach out for cyber security opportunities!</p>
      </motion.div>
      <motion.ul className={styles.links}>
        <motion.li 
          className={styles.link}
          variants={linkVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:daniel.holecek50@gmail.com">daniel.holecek50@gmail.com</a>
        </motion.li>
        <motion.li 
          className={styles.link}
          variants={linkVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/danielholecek">www.linkedin.com/in/danielholecek</a>
        </motion.li>
        <motion.li 
          className={styles.link}
          variants={linkVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/zvwl">github.com/zvwl</a>
        </motion.li>
      </motion.ul>
    </motion.footer>
  );
};
