import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const SocialBar = () => {
  return (
    <motion.div 
      className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <a 
        href="https://github.com/fxinyangat?tab=repositories" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FiGithub size={22} />
      </a>
      <a 
        href="https://linkedin.com/in/inyangatfx" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FiLinkedin size={22} />
      </a>
      <a 
        href="https://x.com/InyangatXavier" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FiTwitter size={22} />
      </a>
      <a 
        href="mailto:fx.inyangat@gmail.com" 
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FiMail size={22} />
      </a>
      <div className="h-24 w-[1px] bg-gray-300 mt-2"></div>
    </motion.div>
  );
};

export default SocialBar; 