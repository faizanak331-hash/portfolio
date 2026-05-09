'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight, LuDownload, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-mesh overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
        
        {/* Profile Image (Top on mobile, Right on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-first lg:order-last w-full flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Decorative Orbs */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute -inset-8 border border-secondary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Actual Image */}
            <div className="relative w-full h-full rounded-full border-4 border-dark-card overflow-hidden shadow-2xl z-10 bg-dark-card">
              <Image 
                src="/assets/profile.jpeg" 
                alt="Muhammad Faizan Alam" 
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Floating Badges (Hidden on very small screens to avoid clutter) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 glass-card px-3 py-1 md:px-4 md:py-2 flex items-center gap-2 z-20"
            >
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs md:text-sm font-medium text-white">Next.js</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 md:-left-12 glass-card px-3 py-1 md:px-4 md:py-2 flex items-center gap-2 z-20"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs md:text-sm font-medium text-white">Full Stack</span>
            </motion.div>
          </div>
          
          {/* Background Blurs */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-float"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </motion.div>

        {/* Text Content (Left on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for remote/onsite roles 
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scalable</span> <br />
            Modern Web Apps
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Muhammad Faizan Alam</span>. A passionate Full Stack Developer 
            specializing in Next.js, React, and Node.js.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View Projects
              <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a 
              href="/My_Resume.pdf" 
              download="Muhammad_Faizan_CV.pdf"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-3 px-4 font-semibold"
            >
              <LuDownload className="w-5 h-5" />
              Download CV
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            {[
              { Icon: LuGithub, href: "https://github.com/faizanak331-hash" },
              { Icon: LuLinkedin, href: "https://www.linkedin.com/in/faizan-alam-9276122b2/" },
              { Icon: LuMail, href: "mailto:faizanak331@gmail.com" }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-dark-border text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
