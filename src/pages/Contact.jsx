import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, we'll use mailto as a simple solution
    // You can integrate EmailJS or a backend service later
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setStatus('Opening your email client...');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8">
                Contact <span className="text-gradient">Information</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                    <br />
                    <a
                      href={`mailto:${personalInfo.alternateEmail}`}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {personalInfo.alternateEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-400 hover:text-secondary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-white mb-4">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-dark-card hover:bg-primary rounded-lg flex items-center justify-center transition-all transform hover:scale-110 border border-dark-lighter hover:border-primary"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-dark-card hover:bg-primary rounded-lg flex items-center justify-center transition-all transform hover:scale-110 border border-dark-lighter hover:border-primary"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                <h3 className="font-semibold text-white mb-2">Availability</h3>
                <p className="text-gray-300 text-sm">
                  Currently seeking <strong>internship and full-time opportunities</strong> in software development, 
                  machine learning, and hardware design roles. Expected graduation: <strong>2026</strong>.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-dark-card border border-dark-lighter rounded-xl p-8">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Send a <span className="text-gradient">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-lighter rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-lighter rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-lighter rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="Job Opportunity / Collaboration / etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-lighter rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                  >
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </button>

                  {status && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-accent"
                    >
                      {status}
                    </motion.p>
                  )}
                </form>

                <p className="text-gray-400 text-sm mt-6 text-center">
                  * All fields are required
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
              I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Email Me
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-dark-card hover:bg-dark-lighter text-white rounded-lg font-semibold border border-primary transition-all transform hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
