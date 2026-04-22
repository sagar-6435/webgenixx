"use client";
import { motion } from "framer-motion";
import { Code, ShoppingCart, Layout, CreditCard, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      desc: "Custom, high-performance websites built with the latest technologies like React, Next.js, and NestJS.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      desc: "Robust online stores with seamless payment integration (Razorpay/Stripe) and inventory management.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      desc: "User-centric designs that are visually stunning and provide a smooth, intuitive experience.",
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      desc: "Secure and reliable payment gateway setups to streamline your business transactions.",
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
            We don&apos;t just build sites; we engineer high-performance ecosystems 
            tailored to your business goals. From concept to deployment, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group hover:border-primary/40 transition-all duration-500"
            >
              <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={service.color} size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 outfit">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 border-primary/20 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold outfit mb-8">
              READY TO ELEVATE? <br /> <span className="gradient-text">Let&apos;s talk.</span>
            </h2>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </motion.div>
      </div>
    </div>
  );
}
