import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiBarChart2 } from 'react-icons/fi';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'ds', name: 'Data Science' },
  { id: 'da', name: 'Data Analytics' },
  { id: 'ml', name: 'Machine Learning' },
  { id: 'ai', name: 'AI Engineering' }
];

const projects = [
  {
    id: 1,
    title: "RAG Pipeline Implementation",
    description: "Built scalable Retrieval-Augmented Generation pipelines for production environments, optimizing document retrieval and response generation.",
    category: "ai",
    tags: ["LangChain", "Python", "Vector DB", "LLMs"],
    image: require('../assets/rag-pipeline.webp'),
    github: "https://github.com/yourusername/rag-pipeline",
    demo: "https://your-demo-link.com"
  },
  {
    id: 2,
    title: "Customer Churn Analysis",
    description: "Developed predictive models to identify potential customer churn using historical data and behavior patterns.",
    category: "ds",
    tags: ["Python", "Scikit-learn", "Pandas", "SQL"],
    image: require('../assets/data-viz.png'),
    github: "https://github.com/yourusername/churn-analysis",
    demo: "https://your-demo-link.com"
  },
  {
    id: 3,
    title: "Sales Performance Dashboard",
    description: "Created interactive dashboards to visualize sales trends, regional performance, and key business metrics.",
    category: "da",
    tags: ["Tableau", "SQL", "Excel", "Data Visualization"],
    image: require('../assets/data-intelligence-engine.png'),
    github: "https://github.com/yourusername/sales-dashboard",
    demo: "https://your-demo-link.com"
  },
  {
    id: 4,
    title: "Sentiment Analysis Model",
    description: "Built and deployed a machine learning model to analyze customer feedback and social media sentiment.",
    category: "ml",
    tags: ["NLP", "TensorFlow", "BERT", "Python"],
    image: require('../assets/data-intelligence-engine.png'),
    github: "https://github.com/yourusername/sentiment-analysis",
    demo: "https://your-demo-link.com"
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