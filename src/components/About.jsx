import { motion } from 'framer-motion';
import { FiBook, FiCode, FiPenTool, FiTrendingUp } from 'react-icons/fi';
import { GiTennisRacket } from 'react-icons/gi';
import Journey from './Journey';
import standardBankImage from '../assets/apple-hq-image.jpg';

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
              src={standardBankImage}
              alt="Xavier at Standard Bank HQ" 
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/50 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-sm">Xavier Inyangat - AI Engineer | Data Scientist</p>
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
              Applied Data Scientist with a passion for transforming complex challenges into AI-powered solutions. 
              At ASU, I architect next-generation <b><i> LLM</i></b> systems with  <b><i> RAG + Fine-tuning</i></b> frameworks that make 
              academic information retrieval 18x more efficient and cheaper while maintaining contextual accuracy.
              </p>

              <p>
              My journey through financial data at Standard Bank revealed how <b><i>SQL-driven analytics</i></b> and <b><i>Machine Learning (ML)</i></b> can 
              transform credit risk and operations. I revolutionized credit evaluation by implementing gradient boosting models 
              that reduced default prediction errors by 22% and developed <b><i>Power BI</i></b> dashboard reports that helped stakeholders identify potential 
              fraud and loan defaults before impacting the bank.
              </p>

              <p>
              From distributed <b><i>Spark</i></b> systems handling terabyte-scale datasets to <b><i>AWS-deployed machine learning pipelines</i></b>, I build
               solutions that scale with demand. At BUAIIR Lab, I focused on optimizing ML models for resource-constrained IoT devices, 
               balancing performance with computational efficiency.
              </p>

      
              <p>
              Known as the <b><i>"AI Evangelist"</i></b> among peers, I bridge technical expertise with clear 
              communication—approaching data science challenges with the same strategic focus and 
              determination I bring to my - <b><i> favorite sport, Tennis</i></b>. 🎾 
              </p>
              

              <p className="text-center text-1.5xl"><i>
              🎯 "True data science is measured not by <b>model accuracy</b>, but by <b>business impact</b>." ~ Ex-Supervisor, Standard Bank
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