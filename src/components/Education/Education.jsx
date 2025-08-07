import React from "react";
import { motion } from "framer-motion";

import styles from "./Education.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Education = () => {
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

  const certVariants = {
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
    <motion.section 
      ref={elementRef}
      className={styles.container} 
      id="education"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2 
        className={styles.title}
        variants={itemVariants}
      >
        Education & Certifications
      </motion.h2>
      
      <div className={styles.content}>
        <motion.div className={styles.education}>
          <motion.h3 variants={itemVariants}>Education</motion.h3>
          <motion.div className={styles.educationItem} variants={itemVariants}>
            <div className={styles.educationHeader}>
              <h4>BSc Hons Computer Science - Cyber Security (1st Class)</h4>
              <span className={styles.date}>Sept 2022 - May 2025</span>
            </div>
            <p className={styles.institution}>University of Kent</p>
          </motion.div>
          
          <motion.div className={styles.educationItem} variants={itemVariants}>
            <div className={styles.educationHeader}>
              <h4>ICT Practitioners Diploma (D*D*D)</h4>
              <span className={styles.date}>Sept 2019 - April 2022</span>
            </div>
            <p className={styles.institution}>Suffolk One Sixth Form College</p>
          </motion.div>
        </motion.div>

        <motion.div className={styles.certifications}>
          <motion.h3 variants={itemVariants}>Certifications</motion.h3>
          <motion.div className={styles.certGrid}>
            <motion.div 
              className={styles.certItem}
              variants={certVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(165, 215, 232, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.certBadge}>✓</div>
              <h4>Google Social Media Marketing</h4>
              <p>Completed</p>
            </motion.div>
            
            <motion.div 
              className={styles.certItem}
              variants={certVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(165, 215, 232, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.certBadge}>✓</div>
              <h4>BT Work Experience</h4>
              <p>Completed</p>
            </motion.div>
            
            <motion.div 
              className={styles.certItem}
              variants={certVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(165, 215, 232, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.certBadge}>✓</div>
              <h4>Code Academy</h4>
              <p>Completed</p>
            </motion.div>
            
            <motion.div 
              className={styles.certItem}
              variants={certVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 215, 100, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.certBadge + " " + styles.inProgress}>⏳</div>
              <h4>CREST Practitioner Security Analyst</h4>
              <p>In Progress</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
