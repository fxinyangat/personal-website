import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiLinkedin, FiTwitter, FiArrowUpRight } from 'react-icons/fi';
import dataIntelligenceImage from '../assets/data-intelligence-engine.png';

const Hero = () => {
  return (
    <main className="min-h-screen pt-24 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div className="order-2 lg:order-1">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mining <span className="text-blue-600">Deep Intelligence</span> from Complex Data
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             <p>
              Hello! I'm Xavier, 
              </p>

              <p>
              AI Data Analyst @ <a 
                href="https://ai.asu.edu/technical-foundation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-0.5 group"
              >
                Arizona State University
                <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              
                (Data, LLM + RAG). Prev. Credit Data Analyst @{" "}
              <a 
                href="https://www.standardbank.com/sbg/standard-bank-group/our-group/about-us" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-0.5 group"
              >
                Standard Bank
                <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              , Prev. AI/ML Research Intern @{" "}
              <a 
                href="https://busitema.ac.ug/research/projects/busitema-ai-interdisciplinary-research-group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-0.5 group"
              >
                BUAIIR Lab
                <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a> (Core ML + IoT Edge).
              </p>
              
         
              <p>
              I develop end-to-end Data Science/ AI solutions using <i><b>Python, SQL, Tableau, AWS, and Machine Learning</b></i> - 
              from automation, ETL pipelines, BI dashboards to production-ready ML models.
              
              </p> 
            </motion.p>
      

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="https://linkedin.com/in/inyangatfx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                LinkedIn
                <span className="transform rotate-45">↗</span>
              </a>
              
              <a 
                href="#projects"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                Project Portfolio
                <span className="transform rotate-45">↓</span>
              </a>
            </motion.div>
          </div>

          {/* Right side - Diagram */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={dataIntelligenceImage}
              alt="Data Intelligence Engine Diagram" 
              className="w-full h-auto max-w-[400px] mx-auto lg:max-w-none"
            />
          </motion.div>
        </div>

        {/* Mobile Social Links */}
        <motion.div 
          className="lg:hidden flex justify-center gap-8 mt-8 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="mailto:fx.inyangat@gmail.com" className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
            <FiMail size={20} className="text-blue-600" />
          </a>
          <a href="https://github.com/fxinyangat?tab=repositories" className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
            <FiGithub size={20} className="text-blue-600" />
          </a>
          <a href="https://linkedin.com/in/inyangatfx" className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
            <FiLinkedin size={20} className="text-blue-600" />
          </a>
          <a href="https://x.com/InyangatXavier" className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
            <FiTwitter size={20} className="text-blue-600" />
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;