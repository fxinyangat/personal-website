import { motion } from 'framer-motion';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const blogs = [
  {
    id: 1,
    title: "Building Scalable RAG Pipelines: A Practical Guide",
    excerpt: "Learn how to develop and optimize Retrieval-Augmented Generation pipelines for production environments.",
    category: "LLMs",
    date: "Mar 15, 2024",
    readTime: "12 min read",
    image: "/assets/rag-pipeline.webp",
    link: "https://medium.com/@your-medium-username/rag-pipelines"
  },
  {
    id: 2,
    title: "LLM Evaluation Metrics: Beyond Accuracy",
    excerpt: "A deep dive into comprehensive evaluation frameworks for Large Language Models, including human-centric metrics.",
    category: "AI Research",
    date: "Mar 10, 2024",
    readTime: "8 min read",
    image: "/assets/llm-eval.jpeg",
    link: "https://medium.com/@your-medium-username/llm-evaluation"
  },
  {
    id: 3,
    title: "Data Visualization Best Practices for Stakeholders",
    excerpt: "How to create impactful data visualizations that drive decision-making and engage non-technical audiences.",
    category: "Data Analytics",
    date: "Mar 5, 2024",
    readTime: "10 min read",
    image: "/assets/data-viz.png",
    link: "https://medium.com/@your-medium-username/data-viz-practices"
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="min-h-screen py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-gray-600">Exploring AI, Machine Learning, and Data Science concepts through practical insights.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              <a 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-blue-600 font-medium">{blog.category}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiClock className="mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <span className="text-blue-600 flex items-center gap-2 group">
                      Read More 
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Get notified about new articles and AI insights.</p>
          <div className="flex max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs; 