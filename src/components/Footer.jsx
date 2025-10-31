import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Shubham Kumar
            </h3>
            <p className="text-gray-400 text-sm">
              B.Tech Electrical Engineering student at IIT Jodhpur, passionate about 
              Machine Learning, Hardware Design, and Software Development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="/#" className="block text-gray-400 hover:text-primary transition-colors">
                Home
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-primary transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
              >
                <FaEnvelope />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors"
              >
                <FaPhone />
                <span className="text-sm">{personalInfo.phone}</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-lighter text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shubham Kumar. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
