"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code, Palette, Zap, Shield, CheckCircle2, ChevronRight, Globe, Layers } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30, rotateX: 10 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking for 3D Hero Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative overflow-hidden selection:bg-primary selection:text-black perspective-[1000px]">
      {/* 3D Parallax Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Hero Section with 3D Interaction */}
      <section className="relative pt-48 pb-32 px-4" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={containerRef}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, z: -100 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-10 text-[10px] font-black tracking-[0.3em] text-primary uppercase bg-primary/5 border border-primary/20 rounded-full backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00f2ff]"></span>
              Architecting Digital Experiences
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black outfit leading-[0.85] mb-12 tracking-tighter">
              BEYOND <br />
              <span className="gradient-text">DIMENSIONS</span>
            </h1>

            <p className="text-gray-400 text-xl md:text-3xl max-w-4xl mx-auto mb-16 leading-tight font-extralight tracking-tight">
              We specialize in <span className="text-white">high-fidelity</span> web development that pushes the boundaries of <span className="text-white">depth and performance</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32">
              <Link href="/contact" className="btn-primary group px-10 py-5 text-xl font-black">
                Launch Project <ArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" size={24} />
              </Link>
              <Link href="/projects" className="btn-secondary px-10 py-5 text-xl font-black">
                Portfolio
              </Link>
            </div>
          </motion.div>

          {/* 3D Interactive Mockup */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative max-w-6xl mx-auto group perspective-[2000px]"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative glass-card p-4 border-white/5 rounded-[2.5rem] shadow-2xl transition-transform duration-200 ease-out">
              <div className="bg-dark-darker rounded-[1.8rem] overflow-hidden aspect-[16/9] relative shadow-inner">
                 <Image 
                   src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600" 
                   alt="3D Visualization" 
                   fill
                   className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                   priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-darker/80 via-transparent to-transparent"></div>
                 
                 {/* Floating 3D HUD Elements */}
                 <motion.div 
                   style={{ translateZ: 100 }}
                   animate={{ y: [-10, 10, -10] }}
                   transition={{ duration: 5, repeat: Infinity }}
                   className="absolute top-12 left-12 glass-card py-4 px-8 border-primary/40 shadow-[0_0_30px_rgba(0,242,255,0.2)]"
                 >
                   <div className="text-left">
                     <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Performance Index</p>
                     <p className="text-3xl font-black outfit">99.9%</p>
                   </div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Perspective Sections */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, rotateX: 20, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-5xl md:text-8xl font-black outfit mb-8 uppercase tracking-tighter">
              Engineering <span className="gradient-text">Excellence</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full shadow-[0_0_20px_#00f2ff]"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {[
              { 
                icon: Layers, 
                title: "3D Visuals", 
                desc: "We integrate WebGL and Three.js for immersive browser experiences.",
                color: "from-blue-600/20 to-blue-400/20"
              },
              { 
                icon: Zap, 
                title: "Turbo Stack", 
                desc: "Next.js 15 + Turbopack for lightning fast interactions and loads.",
                color: "from-purple-600/20 to-pink-400/20"
              },
              { 
                icon: Shield, 
                title: "Bank Grade", 
                desc: "Enterprise-level security for your data and your users' privacy.",
                color: "from-emerald-600/20 to-teal-400/20"
              },
            ].map((feat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ 
                  translateZ: 50,
                  rotateX: -5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="glass-card p-12 border-white/5 hover:border-primary/40 transition-all duration-300 transform-gpu"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-10 shadow-xl`}>
                  <feat.icon className="text-white" size={40} />
                </div>
                <h3 className="text-3xl font-black mb-6 outfit tracking-tight">{feat.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">{feat.desc}</p>
                <div className="flex items-center gap-3 text-primary text-xs font-black uppercase tracking-widest">
                   Learn More <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-48 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          className="max-w-6xl mx-auto glass-card p-24 md:p-40 border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-dark-darker to-secondary/10 -z-10"></div>
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black outfit leading-none mb-12 uppercase tracking-tighter">
              LET&apos;S <br /> <span className="gradient-text">CREATE</span>
            </h2>
            <Link href="/contact" className="btn-primary px-16 py-6 text-2xl font-black tracking-widest uppercase hover:scale-110 active:scale-95 transition-transform shadow-[0_0_40px_rgba(0,242,255,0.3)]">
              Get Started
            </Link>
          </div>
          
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10 blur-sm"></div>
        </motion.div>
      </section>
    </div>
  );
}
