import { motion } from 'framer-motion';
import { FaGithub, FaTrophy, FaRocket, FaCode } from 'react-icons/fa';
import { experience } from '../data/resumeData';

const Experience = () => {
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
              My <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hands-on experience in quantum computing, competitive programming, and leadership roles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Experience */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent hidden md:block"></div>
              )}

              <div className="bg-dark-card border border-dark-lighter rounded-xl p-8 mb-8 hover:border-primary transition-all">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaTrophy className="text-2xl text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h2>
                      <p className="text-primary font-semibold text-lg">
                        {exp.organization}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 md:text-right">
                    <p className="font-semibold">{exp.duration}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-lighter text-gray-300 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Achievements:</h3>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <FaRocket className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {exp.links && Object.keys(exp.links).length > 0 && (
                  <div className="pt-6 border-t border-dark-lighter">
                    <div className="flex flex-wrap gap-4">
                      {exp.links.github && (
                        <a
                          href={exp.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-dark-lighter hover:bg-primary rounded-lg transition-all"
                        >
                          <FaGithub />
                          <span>View Project</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-center mb-12"
          >
            Experience <span className="text-gradient">Highlights</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTrophy className="text-4xl text-yellow-400" />,
                title: "Inter-IIT Tech Meet",
                description: "Top 10% ranking among 23+ IITs in quantum computing challenge",
                stat: "Top 10%"
              },
              {
                icon: <FaCode className="text-4xl text-blue-400" />,
                title: "Quantum Computing",
                description: "Built flight rescheduling system using D-Wave's hybrid quantum solvers",
                stat: "<10% Deviation"
              },
              {
                icon: <FaRocket className="text-4xl text-green-400" />,
                title: "Real-world Impact",
                description: "Delivered live demo to Mphasis and IIT panel with production-ready solution",
                stat: "20+ Flights"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark-card border border-dark-lighter rounded-xl p-8 hover:border-primary transition-all text-center"
              >
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-gray-400 mb-4">{highlight.description}</p>
                <div className="text-3xl font-bold text-gradient">{highlight.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Context */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20"
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Beyond <span className="text-gradient">Technical Work</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                As a <strong className="text-white">Class Representative</strong> for the Electrical'26 batch at IIT Jodhpur, 
                I've developed strong leadership and communication skills while representing my peers' interests.
              </p>
              <p>
                I've also served as <strong className="text-white">Assistant Head</strong> for major college events including 
                Prometeo'24 (technical fest) and Varchas'23 (sports fest), managing teams and coordinating large-scale events 
                with 10,000+ attendees.
              </p>
              <p>
                Additionally, I'm an active member of multiple technical clubs including <strong className="text-white">RAID</strong> (AI/ML/DL club), 
                <strong className="text-white"> Devlup Labs</strong> (Open Source), and the <strong className="text-white">Literature Society</strong>, 
                contributing to a well-rounded skill set beyond pure technical expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
