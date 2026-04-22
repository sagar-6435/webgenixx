"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { toast } from "react-hot-toast";
import { Plus, Trash2, Edit2, LogOut, Loader2, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  techStack: string[];
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    liveUrl: "",
    techStack: "",
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get("/projects");
      setProjects(data);
    } catch (error) {
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await api.post("/projects/upload", formData);
      setFormData((prev) => ({ ...prev, imageUrl: data.url }));
      toast.success("Image uploaded!");
    } catch (error) {
      toast.error("Upload failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      techStack: formData.techStack.split(",").map((s) => s.trim()),
    };

    try {
      if (editingProject) {
        await api.patch(`/projects/${editingProject._id}`, payload);
        toast.success("Project updated!");
      } else {
        await api.post("/projects", payload);
        toast.success("Project added!");
      }
      setModalOpen(false);
      setEditingProject(null);
      setFormData({ title: "", description: "", imageUrl: "", liveUrl: "", techStack: "" });
      fetchProjects();
    } catch (error) {
      toast.error("Operation failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await api.delete(`/projects/${id}`);
      toast.success("Project deleted");
      fetchProjects();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const openEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      liveUrl: project.liveUrl,
      techStack: project.techStack.join(", "),
    });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold outfit">Admin <span className="gradient-text">Dashboard</span></h1>
            <p className="text-gray-500">Manage your agency portfolio</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setEditingProject(null);
                setFormData({ title: "", description: "", imageUrl: "", liveUrl: "", techStack: "" });
                setModalOpen(true);
              }}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} /> Add Project
            </button>
            <button onClick={handleLogout} className="p-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card text-center">
            <p className="text-gray-500 text-sm">Total Projects</p>
            <h2 className="text-4xl font-bold text-primary">{projects.length}</h2>
          </div>
        </div>

        {/* Projects Table */}
        <div className="glass-card p-0 overflow-hidden border-white/5">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-sm uppercase">
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Tech Stack</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-20 text-center">
                    <Loader2 className="animate-spin mx-auto text-primary" size={32} />
                  </td>
                </tr>
              ) : projects.map((project) => (
                <tr key={project._id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={project.imageUrl.startsWith('http') ? project.imageUrl : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}${project.imageUrl}`} className="w-12 h-12 rounded object-cover border border-white/10" alt="" />
                      <div>
                        <p className="font-bold">{project.title}</p>
                        <p className="text-xs text-gray-500 truncate max-w-[200px]">{project.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map(t => <span key={t} className="bg-white/10 px-1.5 py-0.5 rounded">{t}</span>)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEdit(project)} className="p-2 text-gray-400 hover:text-primary"><Edit2 size={18} /></button>
                      <button onClick={() => handleDelete(project._id)} className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-lighter border border-white/10 w-full max-w-2xl rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold mb-6">{editingProject ? "Edit Project" : "Add New Project"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary h-24"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Live URL</label>
                  <input
                    type="text"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                    className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary"
                    placeholder="https://example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Tech Stack (comma separated)</label>
                  <input
                    type="text"
                    value={formData.techStack}
                    onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                    className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary"
                    placeholder="React, NestJS, MongoDB"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Project Image</label>
                <div className="flex gap-4 items-center">
                  <div className="relative group w-32 h-20 bg-dark border border-dashed border-white/20 rounded-lg overflow-hidden flex items-center justify-center">
                    {formData.imageUrl ? (
                      <img src={formData.imageUrl.startsWith('http') ? formData.imageUrl : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}${formData.imageUrl}`} className="w-full h-full object-cover" alt="" />
                    ) : (
                      <ImageIcon className="text-gray-600" />
                    )}
                    <input type="file" onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      className="w-full bg-dark border border-white/10 rounded-lg p-3 text-white outline-none focus:border-primary text-xs"
                      placeholder="Or enter image URL"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="submit" className="btn-primary flex-grow">Save Project</button>
                <button type="button" onClick={() => setModalOpen(false)} className="btn-secondary">Cancel</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
