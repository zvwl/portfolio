import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { GitHub } from "./components/GitHub/GitHub";
import { Hero } from "./components/Hero/Hero";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { SkillsProgress } from "./components/SkillsProgress/SkillsProgress";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div 
            key="main"
            className={styles.App}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <About />
            <SkillsProgress />
            <Experience />
            <Projects />
            <Education />
            <GitHub />
            <Contact />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
