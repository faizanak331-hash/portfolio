'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuExternalLink, LuGithub, LuCode } from 'react-icons/lu';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Ecommerce Web Application',
      desc: 'A full-stack e-commerce solution featuring product management, shopping cart functionality, and user authentication.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
      image: '/assets/ecommerce_project_1778269307389.png',
      github: '#',
      demo: '#'
    },
    {
      title: 'Hybrid Secure Deletion System',
      desc: 'Research-based Final Year Project focusing on secure data deletion using blockchain concepts and advanced encryption.',
      tech: ['Python', 'Blockchain', 'Cryptography'],
      image: '/assets/secure_deletion_project_1778269318718.png',
      github: '#',
      demo: '#'
    },
    {
      title: 'ML Iris Classification',
      desc: 'A machine learning project that classifies iris flower species based on sepal and petal measurements.',
      tech: ['Python', 'Scikit-Learn', 'Pandas'],
      image: '/assets/ml_iris_project_v2_1778269836240.png',
      github: '#',
      demo: '#'
    },
    {
      title: 'Dev Portfolio',
      desc: 'A modern, professional portfolio website designed to showcase developer skills and projects with a premium aesthetic.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind'],
      image: '/assets/portfolio_project_preview_1778269456403.png',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-semibold mb-4">
              <LuCode className="w-5 h-5" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-4xl font-bold">Selected <span className="text-primary">Projects</span></h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">
            A collection of projects that demonstrate my ability to solve real-world problems through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                    <LuGithub className="w-5 h-5" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                    <LuExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
