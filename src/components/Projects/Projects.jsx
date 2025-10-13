import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiCalendar, FiCheck, FiArrowRight } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'E-commerce'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          filter === 'Full Stack' ? ['React.js', 'Node.js', 'Express.js'].some(t => tech.includes(t)) :
          filter === 'Frontend' ? ['React.js', 'Next.js', 'TailwindCSS'].some(t => tech.includes(t)) :
          filter === 'Backend' ? ['Node.js', 'Express.js', 'MongoDB'].some(t => tech.includes(t)) :
          filter === 'E-commerce' ? project.title.toLowerCase().includes('commerce') || project.title.toLowerCase().includes('cart') :
          false
        )
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project-modal"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="modal-header">
            <img src={project.image} alt={project.title} className="modal-image" />
            <div className="modal-header-content">
              <h2>{project.title}</h2>
              <p className="modal-duration">
                <FiCalendar />
                {project.duration}
              </p>
              <div className="modal-status">
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          <div className="modal-content">
            <div className="modal-description">
              <h3>About This Project</h3>
              <p>{project.longDescription}</p>
            </div>

            <div className="modal-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <FiCheck />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-achievements">
              <h3>Achievements</h3>
              <ul>
                {project.achievements.map((achievement, index) => (
                  <li key={index}>
                    <FiStar />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-technologies">
              <h3>Technologies Used</h3>
              <div className="modal-tech-grid">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiGithub />
                View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FiExternalLink />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            A showcase of my recent work and development projects
          </motion.p>

          {/* Filter Tabs */}
          <motion.div className="project-filters" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="projects-grid" variants={itemVariants}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <FiCode className="overlay-icon" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink />
                    </a>
                    <button
                      className="project-link view-more"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div className="projects-cta" variants={itemVariants}>
            <h3>Interested in working together?</h3>
            <p>I'm always open to discussing new opportunities and exciting projects.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
              <FiArrowRight />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;