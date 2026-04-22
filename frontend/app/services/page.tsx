"use client";
import { motion } from "framer-motion";
import { Code, ShoppingCart, Layout, CreditCard, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      desc: "Custom high-performance websites built with Next.js and NestJS for maximum speed and SEO.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      desc: "Robust online stores with inventory management, advanced search, and seamless checkout flows.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      desc: "Modern, intuitive interfaces that enhance user engagement and drive conversion rates.",
      color: "text-pink-400",
      bg: "bg-pink-400/10"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      desc: "Secure Razorpay/Stripe integration for domestic and international transactions.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      icon: Wrench,
      title: "Maintenance & SEO",
      desc: "Regular updates, security patches, and continuous SEO optimization to keep you ahead.",
      color: "text-orange-400",
      bg: "bg-orange-400/10"
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold outfit mb-6">Our <span className="gradient-text">Expertise</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide end-to-end digital solutions tailored to your business needs. 
            From concept to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group hover:bg-white/5 transition-all relative overflow-hidden"
            >
              <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <service.icon className={service.color} size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 outfit">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
              <Link href="/contact" className="text-white font-bold flex items-center gap-2 group/link">
                Learn More <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={18} />
              </Link>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-all"></div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1 glass-card bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 flex flex-col justify-center items-center text-center p-12"
          >
            <h3 className="text-2xl font-bold mb-4">Have a Custom Project?</h3>
            <p className="text-gray-400 mb-8 text-sm">We love building unique and challenging applications. Let's talk about it.</p>
            <Link href="/contact" className="btn-primary w-full">Request a Quote</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
