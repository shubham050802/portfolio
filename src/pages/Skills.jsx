import { motion } from 'framer-motion';
import { FaPython, FaJava, FaGitAlt, FaReact, FaDatabase } from 'react-icons/fa';
import { 
  SiTensorflow, SiScikitlearn, SiOpencv, SiPandas, 
  SiNumpy, SiFlutter, SiDjango, SiFirebase
} from 'react-icons/si';
import { skills } from '../data/resumeData';

const Skills = () => {
  const skillIcons = {
    'Python': <FaPython className="text-4xl text-blue-400" />,
    'Java': <FaJava className="text-4xl text-red-400" />,
    'Git': <FaGitAlt className="text-4xl text-orange-400" />,
    'TensorFlow': <SiTensorflow className="text-4xl text-orange-500" />,
    'Scikit-learn': <SiScikitlearn className="text-4xl text-orange-400" />,
    'OpenCV': <SiOpencv className="text-4xl text-green-400" />,
    'Pandas': <SiPandas className="text-4xl text-blue-300" />,
    'NumPy': <SiNumpy className="text-4xl text-blue-500" />,
    'Flutter': <SiFlutter className="text-4xl text-blue-400" />,
    'Django': <SiDjango className="text-4xl text-green-600" />,
    'Firebase': <SiFirebase className="text-4xl text-yellow-400" />,
  };

  const categoryColors = {
    "Programming Languages": "from-blue-500 to-cyan-500",
    "Machine Learning & AI": "from-purple-500 to-pink-500",
    "Hardware & Systems": "from-orange-500 to-red-500",
    "Development Tools": "from-green-500 to-emerald-500",
    "App & Web Development": "from-indigo-500 to-blue-500",
    "High Performance Computing": "from-yellow-500 to-orange-500"
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
              Technical <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit spanning software development, machine learning, and hardware design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills by Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold mb-2">
                  <span className={`bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                    {category}
                  </span>
                </h2>
                <div className={`h-1 w-24 bg-gradient-to-r ${categoryColors[category]} rounded-full`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-dark-card border border-dark-lighter rounded-xl p-4 hover:border-primary transition-all group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      {skillIcons[skill] || (
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                          <span className="text-xl font-bold">{skill.charAt(0)}</span>
                        </div>
                      )}
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skill Highlights */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-center mb-12"
          >
            Core <span className="text-gradient">Competencies</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Machine Learning",
                description: "Expertise in classification, regression, neural networks, and deep learning with hands-on project experience",
                icon: "🤖",
                skills: ["Scikit-learn", "TensorFlow", "OpenCV", "Pandas", "NumPy"]
              },
              {
                title: "Hardware Design",
                description: "Strong foundation in VLSI, FPGA, embedded systems, and analog/digital circuit design",
                icon: "⚡",
                skills: ["Verilog", "FPGA", "VLSI", "Embedded Systems", "Circuit Design"]
              },
              {
                title: "Software Development",
                description: "Full-stack development experience with modern frameworks and tools",
                icon: "💻",
                skills: ["Python", "C++", "Flutter", "Django", "Git"]
              }
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark-card border border-dark-lighter rounded-xl p-8 hover:border-primary transition-all"
              >
                <div className="text-5xl mb-4">{competency.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{competency.title}</h3>
                <p className="text-gray-400 mb-4">{competency.description}</p>
                <div className="flex flex-wrap gap-2">
                  {competency.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              Continuous <span className="text-gradient">Learning</span>
            </h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
              As a B.Tech student at IIT Jodhpur, I'm constantly expanding my skill set through 
              coursework, projects, and hands-on experience. My journey spans from low-level 
              hardware design to high-level machine learning applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-dark-card rounded-lg border border-primary/30">
                <span className="text-primary font-bold text-2xl">15+</span>
                <span className="text-gray-400 ml-2">Technologies</span>
              </div>
              <div className="px-6 py-3 bg-dark-card rounded-lg border border-secondary/30">
                <span className="text-secondary font-bold text-2xl">10+</span>
                <span className="text-gray-400 ml-2">Projects</span>
              </div>
              <div className="px-6 py-3 bg-dark-card rounded-lg border border-accent/30">
                <span className="text-accent font-bold text-2xl">13+</span>
                <span className="text-gray-400 ml-2">Courses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
