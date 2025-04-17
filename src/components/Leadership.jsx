import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

// Leadership data structure
const leadershipData = [
  {
    id: 1,
    position: "AI Leadership Board Member",
    organization: "W.P Carey School of Business",
    organization_link: "https://www.wpcarey.asu.edu/masters-programs/ai-business",
    period: "2022 - 2023",
    category: "Technical Leadership",
    description: "Selected to represent MS-AIB students in the AI Student Leadership Board aimed at shaping the future of ethical and responsible AI in business.",
    achievements: [
      "Grew community engagement by 30%.",
      "Led technical workshops on AI Ethics & safety.",
      "Organized Academia-Industry Roundtables"
    ],
    location: "Tempe, Arizona",
    link: "https://www.wpcarey.asu.edu/masters-programs/ai-business"
  },
  {
    id: 2,
    position: "AWS Customer Council Member",
    organization: "Amazon Web Services",
    organization_link: "https://aws.amazon.com/",
    period: "2024 - Present",
    category: "Technical Leadership",
    description: "Selected for an invitation-only insights and feedback community that shapes AWS data services and ML infrastructure through research and technical forums.",
    achievements: [
      "Performed beta testing of SageMaker Platform",
      "Participated in 12+ AWS Data research sessions",
      "Provided 'voice of AWS customer' feedback."
    ],
    location: "Arizona, USA",
    link: "https://www.awscustomercouncil.com/hub"
  },
  {
    id: 3,
    position: "GDG Busitema Chapter Lead",
    organization: "Google Developer Group (GDG)",
    organization_link: "https://gdg.community.dev/gdg-busitema/",
    period: "2022 - 2023",
    category: "Technical Leadership",
    description: "Led technical workshops and mentored students in ML/AI technologies. Organized hackathons and coding competitions.",
    achievements: [
      "Grew community from 50 to 200+ active members",
      "Organized 15+ technical workshops",
      "Led 3 successful hackathons"
    ],
    location: "Busitema University",
    link: "https://www.youtube.com/watch?v=V6s5kjSoqzw"
  },
  {
    id: 4,
    position: "Youth Envoy, Generation Connect",
    organization: "International Telecoms Union (ITU)",
    organization_link: "https://www.itu.int/",
    period: "2020 - 2022",
    category: "Technical Education",
    description: "Facilitated learning sessions on cloud computing and AI. Helped students leverage Microsoft technologies for projects.",
    achievements: [
      "Co-designed and implemented 10+ ICT4D projects",
      "Amplified digital skills and inclusion",
      "Promoted global connectivity and innovation"
    ],
    location: "East Africa Region",
    link: "https://www.itu.int/generationconnect/generation-connect-youth-envoys/"
  }
 
];

// Get unique categories
const categories = ['All', ...new Set(leadershipData.map(role => role.category))];

const Leadership = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRoles = useMemo(() => {
    if (activeCategory === 'All') return leadershipData;
    return leadershipData.filter(role => role.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="leadership" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Leadership & Community Impact
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoles.map((role, index) => (
            <motion.div 
              key={role.id}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 * index,
                layout: { duration: 0.3 }
              }}
              layout
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">
                    {role.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-1">
                    {role.position}
                  </h3>
                  <div className="text-gray-600 text-sm mt-1">
                    
                
                <a 
                href={role.organization_link}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-0.5 group"
              >
                {role.organization} • {role.period}
                <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a> 
                  </div>

                </div>

                <p className="text-gray-600 mb-4">
                  {role.description}
                </p>

                <div className="mt-auto">
                  <h4 className="font-medium text-sm mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {role.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}

          {filteredRoles.length === 0 && (
            <motion.div 
              className="col-span-full text-center py-8 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No roles found in this category
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership; 