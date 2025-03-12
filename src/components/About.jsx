import { motion } from 'framer-motion';
import { FiBook, FiCode, FiPenTool, FiTrendingUp } from 'react-icons/fi';
import { GiTennisRacket } from 'react-icons/gi';
import Journey from './Journey';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="/assets/apple-hq-image.jpg"
              alt="Xavier at Standard Bank HQ" 
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-sm">Standard Bank HQ, Johannesburg, South Africa</p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Francis Xavier Inyangat</h1>
              <p className="text-blue-600 text-lg">
                AI + Data Analytics major @ {" "}
                <a 
                  href="https://www.asu.edu" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 underline underline-offset-2"
                >
                  Arizona State University
                </a>
              </p>
            </div> 
           

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
              Applied Data Scientist pursuing a Master's in Artificial Intelligence at Arizona State University. 
              As an AI Research Analyst at ASU, I specialize in LLMs and Retrieval-Augmented Generation, developing scalable 
              solutions that deliver measurable results.
              </p>

              <p>
              My technical arsenal includes <b><i>Python, SQL, Spark, PyTorch, and AWS</i></b>, 
              complemented by data visualization expertise in <b><i>Tableau and Power BI</i></b>. I excel at identifying, collaborating & 
              engineering solutions to data problems through workflow automation, data analysis, and predictive modeling.
              </p>

      
              <p>
              Known as the "AI Evangelist" among peers, I bridge technical expertise with clear 
              communication—approaching data science challenges with the same strategic focus and 
              determination I bring to my favorite sport - Tennis. 🎾 🎾
              </p>

              <p className="text-center text-2xl"><i>
              🎯 "True <b>data science</b> is measured not by <b>model accuracy</b>, but by <b>business impact</b>." ~ Former Supervisor
              </i></p>
            </div>
          </motion.div>
        </motion.div>

        {/* Add Journey component */}
        <Journey />
      </div>
    </section>
  );
};

export default About; 