import React from "react";
import { motion } from "framer-motion";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills },
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className={styles.container}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        variants={imageVariants}
        whileHover="hover"
      />
      <motion.h3 
        className={styles.title}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {description}
      </motion.p>
      <motion.ul 
        className={styles.skills}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
      >
        {skills.map((skill, id) => {
          return (
            <motion.li 
              key={id} 
              className={styles.skill}
              variants={skillVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(165, 215, 232, 0.3)",
                transition: { duration: 0.2 }
              }}
            >
              {skill}
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
