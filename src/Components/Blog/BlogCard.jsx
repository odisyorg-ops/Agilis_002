import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BlogCard = ({ blog }) => {
  if (!blog) return null;

  return (
    /* This Link handles the navigation automatically based on the blog ID */
    <Link to={`/blogs/${blog.id}`} className="block group cursor-pointer">
      <div className="flex flex-col space-y-5">
        
        {/* Visual */}
        <div className="aspect-[16/10] w-full bg-[#f5f5f7] rounded-xl overflow-hidden border border-gray-100">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="text-blue-600">{blog.category}</span>
            <span className="text-[#86868b]">{blog.date}</span>
          </div>

          <h3 className="text-[22px] font-bold text-[#1d1d1f] leading-tight tracking-tight group-hover:text-blue-600 transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="text-[#86868b] text-[15px] leading-relaxed line-clamp-2">
            {blog.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-1.5 text-[#1d1d1f] font-bold text-[13px] uppercase tracking-wider">
            Read Story 
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;