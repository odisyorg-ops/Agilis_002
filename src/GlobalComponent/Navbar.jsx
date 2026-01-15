import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[5%] py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter">
        <Link to="/" className="text-black">AIGILS</Link>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        <Link to="/about" className="hover:text-black transition-colors">About</Link>
        <Link to="/services" className="hover:text-black transition-colors">Solutions</Link>
        <Link to="/blogs" className="hover:text-black transition-colors">Blog</Link>
      </div>

      {/* CTA Button */}
      <button className="bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-all">
        Get in Touch
      </button>
    </nav>
  );
};

export default Navbar;