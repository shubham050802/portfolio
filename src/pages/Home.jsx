import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';
import { personalInfo, projects } from '../data/resumeData';

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm{' '}
                <span className="text-gradient">
                  Shubham Kumar
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                className="text-lg text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {personalInfo.subtitle}
              </motion.p>

              <motion.p
                className="text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Passionate about Machine Learning, Hardware Design, and building 
                innovative solutions that bridge software and hardware.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
                >
                  <span>View Projects</span>
                  <FaArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-dark-card hover:bg-dark-lighter text-white rounded-lg font-semibold border border-primary transition-all transform hover:scale-105"
                >
                  Get in Touch
                </Link>
                <a
                  href="/resume.pdf"
                  className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-white rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
                >
                  <FaDownload />
                  <span>Resume</span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-card hover:bg-primary rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-card hover:bg-primary rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </motion.div>
            </motion.div>

            {/* Image/Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full bg-dark-card rounded-full border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpeg"
                    alt="Shubham Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary px-4 py-2 rounded-lg shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-sm font-bold">IIT Jodhpur</p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-secondary px-4 py-2 rounded-lg shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <p className="text-sm font-bold">ML Enthusiast</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work in Machine Learning, Hardware Design, and App Development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark-card border border-dark-lighter rounded-xl overflow-hidden hover:border-primary transition-all transform hover:scale-105"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden bg-dark-lighter">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-60"></div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-lighter text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold"
            >
              <span>View All Projects</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Projects' },
              { number: '15+', label: 'Technologies' },
              { number: '7.68', label: 'CGPA' },
              { number: '3+', label: 'Leadership Roles' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
