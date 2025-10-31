import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaGoogleDrive, FaGooglePlay } from 'react-icons/fa';
import { projects } from '../data/resumeData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getLinkIcon = (linkType) => {
    switch(linkType) {
      case 'github': return <FaGithub />;
      case 'youtube': return <FaYoutube />;
      case 'drive': return <FaGoogleDrive />;
      case 'playStore': return <FaGooglePlay />;
      default: return <FaExternalLinkAlt />;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of {projects.length} projects spanning Machine Learning, Hardware Design, and App Development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sticky top-16 bg-dark-bg/95 backdrop-blur-md z-40 border-b border-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-dark-card text-gray-400 hover:bg-dark-lighter hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card border border-dark-lighter rounded-xl overflow-hidden hover:border-primary transition-all group"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-lighter text-xs rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-dark-lighter text-xs rounded text-gray-300">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Achievements */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="text-xs text-gray-400 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="line-clamp-2">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-dark-lighter">
                    {Object.entries(project.links).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
                        title={key}
                      >
                        {getLinkIcon(key)}
                        <span className="text-sm capitalize">{key}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
