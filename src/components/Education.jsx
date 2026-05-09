'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuGraduationCap, LuBookOpen, LuAward } from 'react-icons/lu';

const Education = () => {
  const education = [
    {
      degree: 'BS Software Engineering',
      school: 'City University of science and technology peshawar',
      period: '2022 - 2026',
      grade: 'Current Student',
      desc: 'Focusing on Software Engineering, Data Structures, Algorithms, and Machine Learning.'
    },
    {
      degree: 'Intermediate in Pre Engineering ',
      school: 'The peace group of colleges ',
      period: '2019 - 2021',
      desc: 'Foundation in programming, mathematics, and physics.'
    }
  ];

  return (
    <section id="education" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Academic <span className="text-primary">Background</span></h2>
          <p className="text-gray-400">My educational foundation and academic achievements.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <LuGraduationCap className="w-8 h-8" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                </div>
                <span className="text-sm font-bold text-gray-500 bg-dark-bg px-3 py-1 rounded-lg border border-dark-border">{edu.period}</span>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-bold mb-4">
                <LuAward className="w-4 h-4" />
                <span>{edu.grade}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
