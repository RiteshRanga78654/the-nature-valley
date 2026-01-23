"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <footer className="relative bg-[#022c22] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-600 text-white font-Condensed Sans-Serif text-xl shadow-lg cursor-pointer transition-all"
              >
                NV
              </motion.div>
              <span className=" tracking-[0.4em] text-xs font-black text-white">The Nature Valley</span>
            </div>
            <p className="text-stone-300 text-sm font-light leading-relaxed max-w-xs">
              Experience the pinnacle of elite living. Where architecture and the natural world exist in perfect harmony.
            </p>
            <div className="flex gap-8 pt-2">
              {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -2, color: '#10b981' }}
                  className="text-[10px]  tracking-[0.3em] text-emerald-500/70 font-bold transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* SOLID WHITE CONTACT CARD */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            {/* Subtle Top Border Decor */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-600" />
            
            <h4 className="text-emerald-900 text-[10px] font-black  tracking-[0.3em] mb-8">Direct Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-stone-400 text-[9px] font-bold  tracking-widest">Connect</p>
                <div className="text-emerald-950 text-sm font-bold space-y-1">
                  <p className="hover:text-emerald-600 transition-colors cursor-pointer">95832 15640</p>
                  <p className="hover:text-emerald-600 transition-colors cursor-pointer">85625 41320</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-stone-400 text-[9px] font-bold  tracking-widest">Presence</p>
                <p className="text-emerald-900 text-xs font-medium leading-relaxed">
                  Visakhapatnam, AP <br /> Srikakulam, AP
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-3 lg:pl-10">
            <h4 className="text-emerald-500  tracking-widest text-[10px] font-black mb-8">Explore</h4>
            <ul className="space-y-4">
              {["Home", "Villas", "Plots", "Contact"].map((link) => (
                <motion.li 
                  key={link} 
                  whileHover={{ x: 5, color: "#34d399" }}
                  className="text-stone-300 text-[10px] font-bold  tracking-[0.2em] transition-all cursor-pointer flex items-center gap-3 group"
                >
                  <div className="h-[1px] w-3 bg-emerald-900 group-hover:bg-emerald-400 transition-colors" />
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[9px] text-stone-500 italic text-center md:text-left">
            *Conceptual brochure only. Images for reference.
          </p>
          <p className="text-[9px] text-stone-400  tracking-[0.4em] font-black">
            © {currentYear} THE NATURE VALLEY 
          </p>
        </motion.div>
      </motion.div>

      {/* Ghosted Watermark */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h1 className="text-[14vw] font-Condensed Sans-Serif text-white whitespace-nowrap leading-none  tracking-tighter">
          Nature Valley
        </h1>
      </div>
    </footer>
  );
};

export default Footer;