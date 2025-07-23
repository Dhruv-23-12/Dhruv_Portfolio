import { Link } from 'react-router-dom';

function FooterSection() {
  return (
    <footer className="text-white px-6 py-10 rounded-t-2xl shadow-inner shadow-purple-900/30 backdrop-blur-md border-t border-purple-400/20">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-bold mb-2 text-pink-300">Dhruv Portfolio</h3>
          <p className="text-sm text-purple-100">Delivering impactful digital experiences.</p>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="no-underline hover:text-pink-400 transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="no-underline hover:text-blue-400 transition-colors duration-200">About Me</Link></li>
            <li><Link to="/projects" className="no-underline hover:text-cyan-400 transition-colors duration-200">Project</Link></li>
            <li><Link to="/contact" className="no-underline hover:text-yellow-300 transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-bold mb-2 text-purple-300">Contact Info</h3>
          <p>Email: <a href="mailto:dhruvdevelpoer2312@gmail.com" className="no-underline hover:text-pink-400 transition-colors duration-200">dhruvdevelpoer2312@gmail.com</a></p>
          <p>Phone: <a href="tel:+918347179229" className="no-underline hover:text-blue-400 transition-colors duration-200">+91 8347179229</a></p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-purple-200">
        &#169; 2025 Dhruv Portfolio | All Rights Reserved
      </div>
    </footer>
  );
}

export default FooterSection;
