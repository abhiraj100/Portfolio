import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiTool, FiLayers, FiAward, FiTrendingUp } from 'react-icons/fi';
import { skills, certifications } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const [animatedSkills, setAnimatedSkills] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && !animatedSkills) {
      setTimeout(() => setAnimatedSkills(true), 500);
    }
  }, [inView, animatedSkills]);

  const categories = [
    { key: 'languages', label: 'Languages', icon: FiCode },
    { key: 'frameworks', label: 'Frameworks', icon: FiLayers },
    { key: 'databases', label: 'Databases', icon: FiDatabase },
    { key: 'tools', label: 'Tools', icon: FiTool }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -50 }}
      animate={animatedSkills ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={animatedSkills ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  const SkillCard = ({ skill, index }) => (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="skill-card-content">
        <div className="skill-icon">
          <FiCode />
        </div>
        <h4>{skill.name}</h4>
        <div className="skill-level-indicator">
          <div className="level-dots">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`level-dot ${i < Math.ceil(skill.level / 20) ? 'active' : ''}`}
                initial={{ scale: 0 }}
                animate={animatedSkills ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1 + index * 0.1 + i * 0.1 }}
              />
            ))}
          </div>
          <span className="level-text">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Expertise
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            Technologies and tools I work with to bring ideas to life
          </motion.p>

          {/* Skills Categories */}
          <motion.div className="skills-categories" variants={itemVariants}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.key}
                  className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.key)}
                >
                  <IconComponent />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="skills-section" variants={itemVariants}>
            <div className="skills-grid">
              {skills[activeCategory]?.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Skills Progress Bars */}
          <motion.div className="skills-bars-section" variants={itemVariants}>
            <h3 className="subsection-title">
              <FiTrendingUp />
              Proficiency Levels
            </h3>
            <div className="skills-bars">
              {skills[activeCategory]?.slice(0, 6).map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div className="certifications-section" variants={itemVariants}>
            <h3 className="subsection-title">
              <FiAward />
              Certifications & Achievements
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="cert-image">
                    <img src={cert.image} alt={cert.name} />
                  </div>
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                    <div className="cert-skills">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="cert-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    {cert.credentialId && (
                      <p className="cert-id">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-content">
              <h3>What I Bring to the Table</h3>
              <div className="summary-grid">
                <div className="summary-item">
                  <div className="summary-icon">
                    <FiCode />
                  </div>
                  <h4>Frontend Excellence</h4>
                  <p>Creating responsive, interactive, and user-friendly interfaces with modern frameworks like React.js and Next.js.</p>
                </div>
                <div className="summary-item">
                  <div className="summary-icon">
                    <FiDatabase />
                  </div>
                  <h4>Backend Proficiency</h4>
                  <p>Building robust server-side applications with Node.js, Express.js, and efficient database management.</p>
                </div>
                <div className="summary-item">
                  <div className="summary-icon">
                    <FiTool />
                  </div>
                  <h4>Modern Tooling</h4>
                  <p>Leveraging the latest development tools and best practices to ensure code quality and project efficiency.</p>
                </div>
                <div className="summary-item">
                  <div className="summary-icon">
                    <FiTrendingUp />
                  </div>
                  <h4>Continuous Learning</h4>
                  <p>Always staying updated with the latest technologies and trends in web development.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;