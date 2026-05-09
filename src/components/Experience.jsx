'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuBriefcase, LuCalendar, LuMapPin } from 'react-icons/lu';

const Experience = () => {
  const experiences = [
    {
      title: 'Business Development Executive',
      company: 'Tech Solutions PK',
      period: '2023 - Present',
      location: 'Peshawar, Pakistan',
      desc: 'Bridging the gap between technical teams and clients, managing project requirements, and ensuring successful delivery of software solutions.'
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'Freelance / Personal Projects',
      period: '2022 - 2023',
      location: 'Remote',
      desc: 'Built various web applications using React, Node.js, and MongoDB. Focused on responsive design and RESTful API integration.'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work <span className="text-primary">History</span></h2>
          <p className="text-gray-400">My professional journey and growth in the software industry.</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-l-4 border-l-primary relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm bg-dark-bg/50 px-3 py-1 rounded-full border border-dark-border">
                  <LuCalendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <LuMapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {exp.desc}
              </p>
              
              {/* Decorative Dot */}
              <div className="absolute -left-2.5 top-10 w-4 h-4 bg-primary rounded-full border-4 border-dark-bg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
