import React from "react";
import { motion } from "framer-motion";

import styles from "./SkillsProgress.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const SkillsProgress = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.2);

  const skillsData = [
    { name: "Cyber Security", level: 90, category: "Security" },
    { name: "Penetration Testing", level: 85, category: "Security" },
    { name: "Python", level: 65, category: "Programming" },
    { name: "Network Analysis", level: 85, category: "Security" },
    { name: "Java", level: 70, category: "Programming" },
    { name: "C#", level: 50, category: "Programming" },
    { name: "Kali Linux", level: 75, category: "Tools" },
    { name: "Burp Suite", level: 45, category: "Tools" },
    { name: "Machine Learning", level: 65, category: "Data Science" },
    { name: "IoT Development", level: 70, category: "Hardware" },
    { name: "SQL", level: 75, category: "Database" },
    { name: "Technical Support", level: 95, category: "Soft Skills" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeOut"
      }
    })
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Security": "#ff6b6b",
      "Programming": "#4ecdc4", 
      "Tools": "#45b7d1",
      "Data Science": "#96ceb4",
      "Hardware": "#ffeaa7",
      "Database": "#dda0dd",
      "Soft Skills": "#98d8c8"
    };
    return colors[category] || "#a5d7e8";
  };

  return (
    <motion.section 
      ref={elementRef}
      className={styles.container}
      id="skills-progress"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2 
        className={styles.title}
        variants={skillVariants}
      >
        Technical Proficiency
      </motion.h2>
      
      <motion.div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className={styles.skillItem}
            variants={skillVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
              <span 
                className={styles.skillCategory}
                style={{ backgroundColor: getCategoryColor(skill.category) }}
              >
                {skill.category}
              </span>
            </div>
            
            <div className={styles.progressContainer}>
              <div className={styles.progressBackground}>
                <motion.div 
                  className={styles.progressBar}
                  style={{ backgroundColor: getCategoryColor(skill.category) }}
                  variants={progressVariants}
                  custom={skill.level}
                />
              </div>
              <motion.span 
                className={styles.progressText}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
