import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaUsers } from 'react-icons/fa';
import { personalInfo, education, positions, extracurricular, coursework } from '../data/resumeData';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A passionate learner bridging the gap between hardware and software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full bg-dark-card rounded-2xl border-2 border-primary/30 overflow-hidden">
                  <img
                    src="/profile.jpeg"
                    alt="Shubham Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold">
                {personalInfo.name}
              </h2>
              <p className="text-xl text-primary font-semibold">
                {personalInfo.title}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.summary}
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3">
                  <FaGraduationCap className="text-primary text-xl" />
                  <span className="text-gray-300">{personalInfo.subtitle}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaAward className="text-secondary text-xl" />
                  <span className="text-gray-300">CGPA: 7.68/10.0</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaUsers className="text-accent text-xl" />
                  <span className="text-gray-300">Class Representative & Club Core Member</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-center mb-12"
          >
            <span className="text-gradient">Education</span>
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card border border-dark-lighter rounded-xl p-6 hover:border-primary transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-primary font-semibold">{edu.degree}</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <p>{edu.duration}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {edu.cgpa && (
                    <span className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-semibold">
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                  {edu.percentage && (
                    <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-lg font-semibold">
                      {edu.percentage}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-center mb-12"
          >
            Leadership & <span className="text-gradient">Responsibilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card border border-dark-lighter rounded-xl p-6 hover:border-primary transition-all"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <FaUsers className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <p className="text-gray-400 mb-2">{position.organization}</p>
                <p className="text-sm text-gray-500">{position.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-center mb-12"
          >
            <span className="text-gradient">Extracurricular</span> Activities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extracurricular.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card border border-dark-lighter rounded-xl p-6 hover:border-secondary transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-secondary">
                  {activity.title}
                </h3>
                <p className="text-white font-semibold mb-2">{activity.organization}</p>
                <p className="text-gray-400 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Coursework */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-center mb-12"
          >
            Relevant <span className="text-gradient">Coursework</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {coursework.map((course, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-dark-card border border-dark-lighter rounded-lg text-gray-300 hover:border-primary hover:text-primary transition-all"
              >
                {course}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
