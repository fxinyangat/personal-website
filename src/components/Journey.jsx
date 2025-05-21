import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiMapPin } from 'react-icons/fi';
import dataVizImage from '../assets/apple-hq-image4.png';

const journeyPoints = [
  {
    id: 1,
    title: "Arizona State University",
    role: "AI Research & Data Analyst | Msc. Artificial Intelligence",
    period: "2024 - Present",
    type: "work",
    description: "Data Science - ML, NLP, RAG pipelines, LLMs finetuning"
  },
  {
    id: 2,
    title: "Standard Bank",
    role: "Data Analyst, Credit Portfolio",
    period: "2022 - 2024",
    type: "work",
    description: "ML, Data Modeling, ETL Pipelines, SQL, Python & Power BI Dashboards."
  },
  {
    id: 3,
    title: "Refactory",
    role: "Software Developer",
    period: "2021 - 2022",
    type: "work",
    description: "Software Development - Python,JavaScript, SQL, AWS, JavaScript"
  },
  {
    id: 4,
    title: "BUAIIR Lab",
    role: "AI/ML Research Intern",
    period: "2021 - 2021",
    type: "work",
    description: "AI Research: ML models, IoT Embedded Systems, TensorFlow, PyTorch, Python"
  },
  
  {
    id: 5,
    title: "Busitema University",
    role: "BSc. Computer Engineering",
    period: "2017 - 2021",
    type: "education",
    description: "Bachelor's Degree in Computer Engineering"
  }
];

const Journey = () => {
  return (
    <div className="mt-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold mb-8"
      >
        My Journey
      </motion.h2>

      <div className="flex gap-12">
        {/* Timeline Section */}
        <div className="relative flex-1">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>

          {/* Journey points */}
          <div className="space-y-12">
            {journeyPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8"
              >
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center z-10 relative">
                    {point.type === 'education' ? (
                      <FiBookOpen className="w-6 h-6 text-blue-600" />
                    ) : (
                      <FiBriefcase className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-100 absolute top-0 animate-ping-slow opacity-50"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{point.role}</p>
                  <p className="text-gray-500 text-sm mb-2">{point.period}</p>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section - Hidden on mobile, visible on large screens */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block w-1/3 relative"
        >
          <div className="sticky top-24">
            <img 
              src={dataVizImage}
              alt="Journey Illustration" 
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-2 left-4 bg-white/50 backdrop-blur-sm p-3 rounded-lg flex items-center gap-2">
              <FiMapPin className="w-4 h-4 text-blue-600" />
              <p className="text-sm">Standard Bank HQ, Johannesburg, South Africa</p>
            </div>
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-2xl"></div> */}
          </div>
        </motion.div>
       
      </div>
    </div>
  );
};

export default Journey; 