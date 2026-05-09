'use client';
import React from 'react';
import { LuGithub, LuLinkedin, LuMail, LuTwitter, LuTerminal } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
            <LuTerminal className="w-5 h-5" />
          </div>
          <span className="font-bold text-white tracking-tight">FAIZAN<span className="text-primary">.DEV</span></span>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Muhammad Faizan Alam. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
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
              className="text-gray-500 hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10 transition-all"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
