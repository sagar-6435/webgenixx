"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // In a real app, send to API or Formspree
    toast.success("Message sent successfully!");
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi The WebGenixx! I am ${formData.name || "interested"} and I would like to discuss a project.`);
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold outfit mb-4">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your digital journey? Fill out the form or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Email Us</h2>
                  <p className="text-gray-400">hello@webgenixx.com</p>
                  <p className="text-gray-400">support@webgenixx.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="text-secondary" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Live Chat</h2>
                  <p className="text-gray-400">Available Mon-Fri, 9am-6pm</p>
                  <button onClick={handleWhatsApp} className="text-primary hover:underline mt-1 font-semibold flex items-center gap-1">
                    Chat on WhatsApp <ArrowRight size={14} />
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-1">Call Us</h2>
                  <p className="text-gray-400">+91 999 999 9999</p>
                </div>
              </div>
            </div>

            <div className="glass-card bg-primary/5 border-primary/20">
               <h2 className="font-bold mb-4 flex items-center gap-2">
                 <CheckCircle2 className="text-primary" size={20} />
                 Free Consultation
               </h2>
               <p className="text-sm text-gray-400 leading-relaxed">
                 Book a 30-minute discovery call with our technical experts to discuss your project requirements and get a preliminary estimate.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-10 border-white/5 shadow-2xl relative"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500" size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                <p className="text-gray-400 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-dark border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary outline-none transition-all"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-dark border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary outline-none transition-all"
                      placeholder="your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-dark border border-white/10 rounded-lg py-3 px-4 text-white focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}
