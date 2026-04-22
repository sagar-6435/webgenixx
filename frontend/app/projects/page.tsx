"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import api from "@/lib/api";
import { ExternalLink, Loader2 } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  techStack: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold outfit mb-4">Our <span className="gradient-text">Projects</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of our best work, from enterprise platforms to creative experiments.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-primary" size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden flex flex-col hover:border-primary/40 transition-all group"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                  <Image
                    src={project.imageUrl.startsWith('http') ? project.imageUrl : `http://localhost:5000${project.imageUrl}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.liveUrl} target="_blank" className="p-3 bg-primary text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded text-primary/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.liveUrl} target="_blank" className="text-primary font-bold text-sm flex items-center hover:underline">
                  View Case Study <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        )}
        
        {!loading && projects.length === 0 && (
          <div className="text-center py-20 bg-dark-lighter/50 rounded-3xl border border-white/5">
             <p className="text-gray-500">No projects found yet. Admin is working on it!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ArrowRight({ size, className }: { size: number, className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}
