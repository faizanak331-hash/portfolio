'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuUser, LuCode, LuRocket, LuLightbulb } from 'react-icons/lu';

const About = () => {
  const highlights = [
    {
      icon: LuCode,
      title: 'Full Stack Mastery',
      desc: 'Developing end-to-end solutions with a focus on clean code and scalability.'
    },
    {
      icon: LuRocket,
      title: 'Fast Performance',
      desc: 'Optimizing every line of code to ensure the fastest possible user experience.'
    },
    {
      icon: LuLightbulb,
      title: 'Problem Solver',
      desc: 'Turning complex business requirements into simple, elegant digital products.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2 text-primary font-semibold">
              <LuUser className="w-5 h-5" />
              <span>About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A Software Developer with a <span className="text-primary">Passion</span> for Innovation
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a dedicated Software Engineering student and Full Stack Developer with a strong foundation in modern web technologies. My journey in tech is driven by curiosity and the desire to build impactful solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether it's building complex e-commerce platforms or researching hybrid secure deletion models, I bring a detail-oriented approach to every project. I love working with Next.js, React, and Node.js to create seamless digital experiences.
            </p>
            
            <div className="flex gap-8 py-4">
              <div>
                <h4 className="text-3xl font-bold text-white">10+</h4>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">100%</h4>
                <p className="text-gray-500 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex gap-6 hover:bg-dark-card/80 transition-all border-l-4 border-l-primary/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
