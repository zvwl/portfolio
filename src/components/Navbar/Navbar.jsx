import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.a 
        className={styles.title} 
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Daniel Holecek
      </motion.a>
      <div className={styles.menu}>
        <motion.img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className={`${styles.menuItems} ${styles.menuOpen}`}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.li variants={itemVariants}>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#skills-progress" onClick={(e) => handleSmoothScroll(e, 'skills-progress')}>Skills</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')}>Experience</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#education" onClick={(e) => handleSmoothScroll(e, 'education')}>Education</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#github" onClick={(e) => handleSmoothScroll(e, 'github')}>GitHub</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
