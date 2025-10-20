import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiCalendar,
  FiCode,
  FiTool,
  FiHeart,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import { personalInfo, education, stats } from "../../data/portfolioData";
import "./About.css";

const About = () => {
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

  const statsIcons = {
    "Projects Completed": FiCode,
    "Years of Experience": FiCalendar,
    "Technologies Mastered": FiTool,
    "Client Satisfaction": FiHeart,
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-intro">
                <h3>Hello! I'm Abhiraj Yadav</h3>
                <p>
                  A passionate Full Stack Developer with a strong foundation in
                  modern web technologies and a keen eye for creating
                  exceptional user experiences.
                </p>
                <p>
                  I have completed my Master’s in Computer Applications (MCA)
                  from VIT Bhopal University, where I honed my technical
                  expertise and developed a strong foundation in MERN Stack
                  (MongoDB, Express.js, React.js, Node.js) development. My
                  approach blends clean code, responsive design, and efficient
                  architecture to create scalable, maintainable digital
                  solutions. With both academic excellence and hands-on industry
                  experience, I bring a balanced perspective to problem-solving
                  — from front-end aesthetics to robust back-end functionality.
                  I’m passionate about continuous learning, exploring new
                  technologies, and contributing to projects that make an
                  impact.
                </p>

                <p>
                  <b>💡 Key Focus Areas: </b>
                </p>
                <div>
                  <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                    <li>Full Stack Web Development (MERN)</li>
                    <li>RESTful API Design & Integration</li>
                    <li>Responsive UI/UX Development</li>
                    <li>Performance Optimization & Clean Architecture</li>
                    <li>Version Control (Git, GitHub)</li>
                  </ul>
                </div>
                <p>
                  My journey in web development started with a curiosity about
                  how websites work, and it has evolved into a career dedicated
                  to building scalable, efficient, and user-friendly
                  applications. I specialize in the MERN stack and have
                  experience working with various modern frameworks and tools.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I believe in
                  continuous learning and staying updated with the latest trends
                  in web development.
                </p>
              </div>

              <div className="about-highlights">
                <h4>What I Do</h4>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <FiCode className="highlight-icon" />
                    <div>
                      <h5>Frontend Development</h5>
                      <p>
                        Creating responsive and interactive user interfaces
                        using React.js, Next.js, and modern CSS frameworks.
                      </p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <FiTool className="highlight-icon" />
                    <div>
                      <h5>Backend Development</h5>
                      <p>
                        Building robust server-side applications with Node.js,
                        Express.js, and database management.
                      </p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <FiHeart className="highlight-icon" />
                    <div>
                      <h5>Full Stack Solutions</h5>
                      <p>
                        Delivering end-to-end web applications with seamless
                        integration between frontend and backend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="about-image">
                <img src="src/assets/profile.jpeg" alt="Abhiraj Yadav" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <FiAward className="overlay-icon" />
                    <span>Dedicated Developer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div className="stats-container" variants={itemVariants}>
            <div className="stats-grid">
              {stats.map((stat, index) => {
                const IconComponent = statsIcons[stat.label];
                return (
                  <motion.div
                    key={stat.id}
                    className="stat-item"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      inView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-icon">
                      <IconComponent />
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div className="education-section" variants={itemVariants}>
            <h3 className="subsection-title">
              <FiBookOpen />
              Education
            </h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="education-card"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={
                    inView
                      ? { x: 0, opacity: 1 }
                      : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }
                  }
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="education-duration">{edu.duration}</span>
                  </div>
                  <h5 className="education-institution">{edu.institution}</h5>
                  <p className="education-location">{edu.location}</p>
                  <div className="education-grade">
                    <span className="grade-label">CGPA:</span>
                    <span className="grade-value">{edu.cgpa}</span>
                  </div>
                  <p className="education-description">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
