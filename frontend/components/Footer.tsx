import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-darker border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="The WebGenixx Logo" fill className="object-contain" sizes="32px" />
              </div>
              <span className="text-xl font-black tracking-tighter outfit group-hover:text-primary transition-colors uppercase">THE WEBGENIXX</span>
            </Link>
            <p className="text-gray-400 max-w-md mb-8">
              Empowering brands with cutting-edge web solutions. We blend creativity with technology to build digital experiences that leave a lasting impact.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {['Web Dev', 'E-commerce', 'UI/UX Design', 'Maintenance'].map((item) => (
                <li key={item} className="text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} The WebGenixx. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
