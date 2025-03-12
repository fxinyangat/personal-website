import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiTag } from 'react-icons/fi';

const BlogDetail = ({ blog }) => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiTag />
                <span>{blog.category}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <img 
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Blog content will go here */}
            <p>Content coming soon...</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetail; 