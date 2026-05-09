'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuLayoutGrid, LuServer, LuDatabase, LuTerminal, LuSettings } from 'react-icons/lu';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: LuLayoutGrid,
      skills: ['Next.js', 'React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Backend',
      icon: LuServer,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']
    },
    {
      title: 'Database',
      icon: LuDatabase,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase']
    },
    {
      title: 'AI & Data',
      icon: LuTerminal,
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-Learn']
    },
    {
      title: 'Tools',
      icon: LuSettings,
      skills: ['Git/GitHub', 'Docker', 'Vercel', 'Postman']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've built a diverse skillset to handle every aspect of modern software development, from UI design to backend architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 border-t-2 border-t-primary/20"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <category.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-xs text-gray-300 hover:border-primary/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
