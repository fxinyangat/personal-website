import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiBarChart2 } from 'react-icons/fi';

// Import images
import ragPipelineImage from '../assets/rag-pipeline.webp';
import dataVizImage from '../assets/data-viz.png';
import dataIntelligenceImage from '../assets/ml.jpg';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'ds', name: 'Data Science' },
  { id: 'da', name: 'Data Analytics' },
  { id: 'ai', name: 'AI Engineering' }
];

const projects = [
  {
    id: 1,
    title: "Sales ETL Pipeline - Cloud-Based Data Warehousing with AWS",
    description: "Leveraged Python and AWS services to build two scalable data pipelines automating data flow (ETL) from MySQL transactional database to data warehouse (Redshift), delivering near real-time sales and customer insights for data-driven decisions across ABX Retail Group (North & Latin America) and enabling future analytics/ML.",
    category: "da",
    tags: ["Python", "AWS Redshift", "AWS S3", "MySQL"],
    image: ragPipelineImage,
    github: "https://github.com/fxinyangat/Retail-Sale-and-Customer-Intelligence-ETL-Data-Pipeline",
    demo: "https://github.com/fxinyangat/Retail-Sale-and-Customer-Intelligence-ETL-Data-Pipeline"
  },
  {
    id: 2,
    title: "Machine Learning Driven Mortgage Property Valuation",
    description: "Built an AI-powered property valuation model using Gradient Boosting and SHAP explainability, enabling financial institutions and mortgage lenders to make transparent, data-driven pricing decisions with up to 80% accuracy.",
    category: "ds",
    tags: ["Python", "Gradient Boosting", "Scikit-learn"],
    image: dataVizImage,
    github: "https://github.com/yourusername/churn-analysis",
    demo: "https://your-demo-link.com"
  },
  // {
  //   id: 3,
  //   title: "Sales Performance Dashboard",
  //   description: "Created interactive dashboards to visualize sales trends, regional performance, and key business metrics.",
  //   category: "da",
  //   tags: ["Tableau", "SQL", "Excel", "Data Visualization"],
  //   image: dataIntelligenceImage,
  //   github: "https://github.com/yourusername/sales-dashboard",
  //   demo: "https://your-demo-link.com"
  // },
  {
    id: 4,
    title: "AI-Driven Early Warning System for Cardiovascular Risk",
    description: "Developed a logistic regression model using patient demographics and clinical indicators to predict heart disease with 75% accuracy and 0.83 ROC-AUC, offering an early screening tool to support preventive care and timely medical intervention.",
    category: "ds",
    tags: ["Python", "Jupyter Notebook", "Logistic Regression", "Scikit-learn"],
    image: dataIntelligenceImage,
    github: "https://github.com/fxinyangat/Enhancing-Healthcare-with-Machine-Learning_Predictive_Early_Diagnosis",
    demo: "https://github.com/fxinyangat/Enhancing-Healthcare-with-Machine-Learning_Predictive_Early_Diagnosis"
  },
  {
    id: 5,
    title: "NLP Text Cleaning and Processing Pipeline",
    description: "Developed a modular NLP pipeline in Python using NLTK, SpaCy, and Scikit-learn for efficient text preprocessing and classification—initially applied to spam detection from CSV data—and designed for reuse in sentiment analysis, chatbots, and document classification across larger systems.",
    category: "ds",
    tags: ["Python", "NLTK", "SpaCy", "Scikit-learn"],
    image: dataIntelligenceImage,
    github: "https://github.com/fxinyangat/NLP-Text-Cleaning-and-Processing-Pipeline",
    demo: "https://github.com/fxinyangat/NLP-Text-Cleaning-and-Processing-Pipeline"
  },
  {
    id: 6,
    title: "Predictive Modeling for Market Driven Price Optimization",
    description: "Developed an XGBoost-based machine learning model to predict vehicle MSRP with 99.36% accuracy using engine, drivetrain, and fuel specs—empowering automakers, insurers, and dealers to make data-driven pricing decisions.",
    category: "ds",
    tags: ["Python", "XGBoost", "Random Forest"],
    image: dataIntelligenceImage,
    github: "https://github.com/fxinyangat/Predictive-Modeling-for-Market-Driven-Price-Optimization_Predicting_Retail_Price",
    demo: "https://github.com/fxinyangat/Predictive-Modeling-for-Market-Driven-Price-Optimization_Predicting_Retail_Price"
  },
  {
    id: 7,
    title: "AI-Driven Cancellation Prediction for Hotels and Financial Risk",
    description: "Built a Random Forest model with 89.1% accuracy and 85.4% F1-score to predict hotel booking cancellations, enabling revenue optimization, risk-based overbooking strategies, and applications in financial and insurance risk assessment.",
    category: "ds",
    tags: ["Python", "Random Forest", "Scikit-learn"],
    image: dataIntelligenceImage,
    github: "https://github.com/fxinyangat/AI-Driven-Demand-Forecasting-and-Risk-Optimization-Predicting-Customer-Behavior-in-Dynamic-Markets",
    demo: "https://github.com/fxinyangat/AI-Driven-Demand-Forecasting-and-Risk-Optimization-Predicting-Customer-Behavior-in-Dynamic-Markets"
  },
  {
    id: 8,
    title: "Predictive Credit Scoring: Automating lending decisions using ML",
    description: "Developed a machine learning model achieving 90.58% accuracy and 85.25% recall to predict loan approvals, optimize credit risk segmentation, and support fair, compliant, and revenue-driven lending strategies.",
    category: "ds",
    tags: ["Random Forest", "KNN","XGBoost", "GridSearchCV"],
    image: dataIntelligenceImage,
    github: "https://github.com/fxinyangat/Predictive-Credit-Scoring-Machine-Learning-Approach-to-Lending-Decisions",
    demo: "https://github.com/fxinyangat/Predictive-Credit-Scoring-Machine-Learning-Approach-to-Lending-Decisions"
  },
  {
    id: 9,
    title: "Personalized Restaurant Recommendation System with AI",
    description: "Built a hybrid restaurant recommendation system using Item-Based Collaborative Filtering and TF-IDF sentiment features from Yelp reviews, achieving 90% precision and enabling highly relevant, personalized dining suggestions.",
    category: "ds",
    tags: ["Python", "Item-Based Collaborative Filtering", "TF-IDF", "NLTK"],
    image: dataIntelligenceImage,
    github: "https://github.com/fxinyangat/restaurant_recommendation_system_model",
    demo: "https://github.com/fxinyangat/restaurant_recommendation_system_model"
  }
  // Add more projects...
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 mb-8">Exploring the intersection of AI, Data Science, and real-world applications.</p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://github.com/fxinyangat?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 
                       text-white rounded-full transition-all duration-300 hover:shadow-lg group"
            >
              <FiGithub className="w-5 h-5" />
              <span>View GitHub Profile</span>
              <FiExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transform 
                                      group-hover:translate-x-1 transition-all" />
            </a>
            
            <a
              href="https://public.tableau.com/app/profile/francis.xavier.inyangat/vizzes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-full transition-all duration-300 hover:shadow-lg group"
            >
              <FiBarChart2 className="w-5 h-5" />
              <span>Tableau Portfolio</span>
              <FiExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transform 
                                      group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* Category Tabs - Enhanced hover effect */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5
                ${activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl 
                          transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 
                                transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 
                               transform hover:scale-110 hover:shadow-lg"
                    >
                      <FiGithub size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 
                                 transform hover:scale-110 hover:shadow-lg"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full
                                 transition-all duration-300 hover:bg-blue-100 hover:shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 