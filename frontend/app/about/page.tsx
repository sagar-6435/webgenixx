"use client";
import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";

export default function About() {
  const values = [
    { icon: Rocket, title: "Mission", desc: "To empower businesses with innovative digital solutions that drive real-world results." },
    { icon: Target, title: "Vision", desc: "To be the world's most creator-centric web development agency, setting standards for excellence." },
    { icon: Eye, title: "Our Why", desc: "We believe every great idea deserves a digital stage that reflects its brilliance." },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-5xl font-bold outfit mb-6">Our <span className="gradient-text">Story</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Founded in 2024, The WebGenixx started as a small team of passionate developers and designers 
            with one goal: to redefine how the web is built. Today, we're a global partner for startups 
            and enterprises alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="glass-card text-center hover:border-secondary/40 transition-all p-6"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <val.icon className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 outfit">{val.title}</h3>
              <p className="text-gray-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass-card p-8 md:p-12 border-primary/10 relative overflow-hidden">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 outfit">Why Choose <span className="text-primary">The WebGenixx?</span></h2>
                <ul className="space-y-4">
                  {['Performance First Approach', 'Pixel Perfect Designs', 'Scalable Architecture', '24/7 Dedicated Support'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dark rounded-2xl p-8 border border-white/5">
                <p className="italic text-gray-400 text-lg mb-6">"The WebGenixx transformed our legacy platform into a modern powerhouse. Their attention to detail is unmatched."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                  <div>
                    <p className="font-bold">TEAM THE WEBGENIXX</p>
                    <p className="text-sm text-gray-500">CEO at TechFlow</p>
                  </div>
                </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      </div>
    </div>
  );
}
