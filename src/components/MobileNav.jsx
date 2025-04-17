import { motion } from 'framer-motion';
import { FiX, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const MobileNav = ({ isOpen, onClose }) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Leadership', href: '#leadership' }
  ];

  return (
    <>
      {/* Side Panel */}
      <motion.div 
        className="fixed top-0 right-0 h-full w-[80%] bg-white z-50 md:hidden shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600"
        >
          <FiX size={24} />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col px-6 pt-20">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="py-4 text-lg border-b border-gray-100" onClick={onClose}>{link.name}</a>
          ))}
        </div>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
          <div className="flex justify-around">
            <a 
              href="mailto:fx.inyangat@gmail.com"
              className="p-3 rounded-full hover:bg-blue-50"
            >
              <FiMail size={24} />
            </a>
            <a 
              href="https://github.com/fxinyangat?tab=repositories"
              className="p-3 rounded-full hover:bg-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/inyangatfx"
              className="p-3 rounded-full hover:bg-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="https://x.com/InyangatXavier"
              className="p-3 rounded-full hover:bg-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
    </>
  );
};

export default MobileNav; 