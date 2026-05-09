'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LuMail, LuPhone, LuMapPin, LuSend, LuMessageSquare } from 'react-icons/lu';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-semibold mb-4"
          >
            <LuMessageSquare className="w-5 h-5" />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Let's Build Something <span className="text-primary">Together</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <a 
              href="mailto:faizanak331@gmail.com"
              className="glass-card p-8 flex items-start gap-6 border-l-4 border-l-primary hover:bg-dark-card/80 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <LuMail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">Email Me</h4>
                <p className="text-gray-400 text-sm">faizanak331@gmail.com</p>
                <p className="text-primary text-xs mt-2 font-bold uppercase tracking-wider">Available for work</p>
              </div>
            </a>

            <a 
              href="https://wa.me/923316966788"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 flex items-start gap-6 border-l-4 border-l-secondary hover:bg-dark-card/80 transition-all group"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-green-500/10 group-hover:text-green-500 shrink-0 transition-colors">
                <LuPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-green-500 transition-colors">WhatsApp</h4>
                <p className="text-gray-400 text-sm">+92 331 6966788</p>
                <p className="text-secondary text-xs mt-2 font-bold uppercase tracking-wider group-hover:text-green-500">Fast Response</p>
              </div>
            </a>

            <div className="glass-card p-8 flex items-start gap-6 border-l-4 border-l-accent hover:bg-dark-card/80 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                <LuMapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                <p className="text-gray-400 text-sm">Peshawar, Pakistan</p>
                <p className="text-accent text-xs mt-2 font-bold uppercase tracking-wider">Open to remote</p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8 md:p-12"
          >
            <form action="https://formspree.io/f/your_id" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 group">
                Send Message
                <LuSend className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
