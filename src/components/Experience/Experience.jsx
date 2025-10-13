import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { experience } from "../../data/portfolioData";
import "./Experience.css";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Professional Experience
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            My journey in web development, from internships to full-time roles
          </motion.p>

          <div className="timeline-container">
            <motion.div
              className="timeline-line"
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />

            <div className="timeline-content">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`timeline-item ${
                    index % 2 === 0 ? "timeline-left" : "timeline-right"
                  }`}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  animate={
                    inView
                      ? { x: 0, opacity: 1 }
                      : { x: index % 2 === 0 ? -100 : 100, opacity: 0 }
                  }
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="timeline-marker"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.4 }}
                  >
                    <FiBriefcase />
                  </motion.div>

                  <motion.div
                    className="experience-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="experience-header">
                      <div className="experience-title-section">
                        <h3 className="experience-position">{exp.position}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                      </div>
                      <div className="experience-type">
                        <span
                          className={`type-badge ${exp.type.toLowerCase()}`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="experience-meta">
                      <div className="meta-item">
                        <FiCalendar />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="meta-item">
                        <FiMapPin />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="experience-description">{exp.description}</p>

                    <div className="experience-achievements">
                      <h5>Key Achievements:</h5>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{
                              delay: 1 + index * 0.2 + achIndex * 0.1,
                            }}
                          >
                            <FiCheckCircle className="achievement-icon" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="experience-technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="tech-tag"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={
                              inView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0 }
                            }
                            transition={{
                              delay: 1.2 + index * 0.2 + techIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      className="experience-link"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn more about this role</span>
                      <FiArrowRight />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            className="experience-summary"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="summary-grid">
              <div className="summary-item">
                <h3>1+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="summary-item">
                <h3>5</h3>
                <p>Companies Worked With</p>
              </div>
              <div className="summary-item">
                <h3>15+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="summary-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
