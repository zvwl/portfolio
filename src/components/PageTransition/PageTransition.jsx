import React from 'react';
import { motion } from 'framer-motion';
import styles from './PageTransition.module.css';

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      {children}
    </motion.div>
  );
};
