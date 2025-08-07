import React from "react";
import { motion } from "framer-motion";

import styles from "./Projects.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={elementRef}
      className={styles.container} 
      id="projects"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2 
        className={styles.title}
        variants={titleVariants}
      >
        Projects
      </motion.h2>
      <motion.div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <motion.div
              key={id}
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};
