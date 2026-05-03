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

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black outfit leading-[0.85] mb-12 tracking-tighter">
              THE <br />
              <span className="gradient-text">WEBGENIXX</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-tight font-extralight tracking-tight">
              We specialize in <span className="text-white">high-fidelity</span> web development that pushes the boundaries of <span className="text-white">depth and performance</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
              <Link href="/contact" className="btn-primary group flex items-center">
                Launch Project <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
              <Link href="/projects" className="btn-secondary">
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
            className="relative max-w-4xl mx-auto group perspective-[2000px]"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
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
                    <p className="text-3xl font-black outfit">98.0%</p>
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
            <h2 className="text-4xl md:text-6xl font-black outfit mb-6 uppercase tracking-tighter">
              Engineering <span className="gradient-text">Excellence</span>
            </h2>
            <div className="h-1 w-32 bg-primary mx-auto rounded-full shadow-[0_0_20px_#00f2ff]"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                icon: Palette,
                title: "Website Designing",
                desc: "High-fidelity UI/UX designs that capture your brand's essence and engage your audience through immersive visuals.",
                color: "from-blue-600/20 to-blue-400/20"
              },
              {
                icon: Code,
                title: "Website Development",
                desc: "Building lightning-fast, responsive, and scalable web applications using the latest modern technology stacks.",
                color: "from-purple-600/20 to-pink-400/20"
              },
              {
                icon: Globe,
                title: "SEO Optimization",
                desc: "Strategic search engine optimization to boost your visibility, drive organic traffic, and outrank your competition.",
                color: "from-emerald-600/20 to-teal-400/20"
              },
              {
                icon: Shield,
                title: "Maintenance",
                desc: "Continuous monitoring, security updates, and performance tuning to keep your digital assets running flawlessly.",
                color: "from-orange-600/20 to-red-400/20"
              },
              {
                icon: Layers,
                title: "Website Redesigning",
                desc: "Transforming outdated websites into modern, high-converting platforms that align with current digital standards.",
                color: "from-indigo-600/20 to-cyan-400/20"
              },
            ].map((feat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  translateZ: 30,
                  rotateX: -2,
                  rotateY: 2,
                  scale: 1.01
                }}
                className="glass-card p-8 border-white/5 hover:border-primary/40 transition-all duration-300 transform-gpu"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-8 shadow-xl`}>
                  <feat.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 outfit tracking-tight">{feat.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8 font-light">{feat.desc}</p>
                <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest">
                  Learn More <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-48 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          className="max-w-5xl mx-auto glass-card p-16 md:p-24 border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-dark-darker to-secondary/10 -z-10"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black outfit leading-none mb-10 uppercase tracking-tighter">
              LET&apos;S <br /> <span className="gradient-text">CREATE</span>
            </h2>
            <Link href="/contact" className="btn-primary inline-block px-12 py-4">
              Get Started
            </Link>
          </div>

          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10 blur-sm"></div>
        </motion.div>
      </section>
    </div>
  );
}
