import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./GitHub.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const GitHub = () => {
  const [elementRef, isVisible] = useScrollAnimation(0.2);
  const [stats, setStats] = useState({
    publicRepos: 0,
    followers: 0,
    following: 0,
    totalCommits: 0
  });
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your GitHub username
  const GITHUB_USERNAME = "zvwl";

  // Fetch GitHub data
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // GitHub API headers with your personal access token
        const headers = {
          'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        };
        
        // Fetch user stats
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, { headers });
        const reposData = await reposResponse.json();
        
        // Update stats
        setStats({
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          totalCommits: 150 // GitHub API doesn't provide total commits easily, so keeping estimated
        });
        
        // Update repositories (filter out forks and select most relevant)
        const filteredRepos = reposData
          .filter(repo => !repo.fork)
          .slice(0, 4)
          .map(repo => ({
            name: repo.name,
            description: repo.description || "No description available",
            language: repo.language || "Text",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url
          }));
        
        setRepositories(filteredRepos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        // Fallback to mock data if API fails
        setStats({
          publicRepos: 12,
          followers: 8,
          following: 15,
          totalCommits: 150
        });
        setRepositories([
          {
            name: "network-traffic-analyser",
            description: "ML-based network security analyzer with 98-100% attack detection using Random Forest classification",
            language: "Python",
            stars: 5,
            forks: 2,
            url: "https://github.com/zvwl/network-traffic-analyser"
          },
          {
            name: "SmartPlantMonitor",
            description: "IoT device monitoring soil humidity with 95% accuracy, featuring automated irrigation and real-time notifications",
            language: "C++",
            stars: 3,
            forks: 1,
            url: "https://github.com/zvwl/SmartPlantMonitor"
          }
        ]);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

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

  const statVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getLanguageColor = (language) => {
    const colors = {
      "Python": "#3776ab",
      "JavaScript": "#f7df1e",
      "C++": "#00599c",
      "Java": "#ed8b00",
      "HTML": "#e34c26",
      "CSS": "#1572b6"
    };
    return colors[language] || "#a5d7e8";
  };

  return (
    <motion.section 
      ref={elementRef}
      className={styles.container}
      id="github"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h2 
        className={styles.title}
        variants={itemVariants}
      >
        GitHub Activity
      </motion.h2>

      <motion.div className={styles.statsContainer} variants={itemVariants}>
        <motion.div className={styles.statItem} variants={statVariants}>
          <motion.div 
            className={styles.statNumber}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {stats.publicRepos}
          </motion.div>
          <div className={styles.statLabel}>Repositories</div>
        </motion.div>

        <motion.div className={styles.statItem} variants={statVariants}>
          <motion.div 
            className={styles.statNumber}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {stats.totalCommits}+
          </motion.div>
          <div className={styles.statLabel}>Contributions</div>
        </motion.div>

        <motion.div className={styles.statItem} variants={statVariants}>
          <motion.div 
            className={styles.statNumber}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            {stats.followers}
          </motion.div>
          <div className={styles.statLabel}>Followers</div>
        </motion.div>

        <motion.div className={styles.statItem} variants={statVariants}>
          <motion.div 
            className={styles.statNumber}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            {stats.following}
          </motion.div>
          <div className={styles.statLabel}>Following</div>
        </motion.div>
      </motion.div>

      <motion.div className={styles.repositoriesContainer} variants={itemVariants}>
        <h3 className={styles.reposTitle}>Featured Repositories</h3>
        {loading ? (
          <div className={styles.loading}>Loading repositories...</div>
        ) : (
          <div className={styles.reposGrid}>
            {repositories.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoCard}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(165, 215, 232, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className={styles.repoHeader}>
                  <h4 className={styles.repoName}>📁 {repo.name}</h4>
                  <div className={styles.repoStats}>
                    <span className={styles.repoStat}>⭐ {repo.stars}</span>
                    <span className={styles.repoStat}>🍴 {repo.forks}</span>
                  </div>
                </div>
                
                <p className={styles.repoDescription}>{repo.description}</p>
                
                <div className={styles.repoFooter}>
                  <div className={styles.languageIndicator}>
                    <div 
                      className={styles.languageDot}
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    ></div>
                    <span className={styles.languageName}>{repo.language}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div className={styles.profileLink} variants={itemVariants}>
        <motion.a 
          href="https://github.com/zvwl" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.githubButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Full GitHub Profile
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
