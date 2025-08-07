import React from "react";
import { motion } from "framer-motion";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const About = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={elementRef}
      className={styles.container} 
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2 
        className={styles.title}
        variants={itemVariants}
      >
        About
      </motion.h2>
      <div className={styles.content}>
        <motion.img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          variants={imageVariants}
        />
        <motion.ul className={styles.aboutItems}>
          <motion.li className={styles.aboutItem} variants={itemVariants}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Cyber Security Specialist</h3>
              <p>
                Experienced in penetration testing, vulnerability assessment, and security 
                analysis with expertise in Kali Linux and various security tools.
              </p>
            </div>
          </motion.li>
          <motion.li className={styles.aboutItem} variants={itemVariants}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer & Network Analyst</h3>
              <p>
                Developed a machine learning-based traffic analyser using Python to identify 
                incoming threats. Proficient in Python, C#, Java, PHP, and web technologies.
              </p>
            </div>
          </motion.li>
          <motion.li className={styles.aboutItem} variants={itemVariants}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Technical Support Expert</h3>
              <p>
                Delivered exceptional customer service at Apple and university environments, 
                maintaining 98% satisfaction ratings and supporting diverse technical needs.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
};
