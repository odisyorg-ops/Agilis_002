import React from 'react';
import blogData from "../data/blogs.json";
import BlogCard from '../Components/Blog/BlogCard';

const Blogs = () => {
    return (
        <div className='min-h-screen bg-white py-24 px-4 antialiased'>
            {/* 1. Header Area */}
            <div className="w-[95vw] md:w-[80vw] mx-auto mb-20">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6 block">
                    The Agilis Journal
                </span>
                <h1 className="text-[48px] md:text-[64px] font-bold tracking-tighter text-[#1d1d1f]">
                    Blogs
                </h1>
                <p className="text-[#86868b] text-xl mt-4">Exploring the future of technology and design.</p>
            </div>

            {/* 2. Grid Mapping */}
            <div className="w-[95vw] md:w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogData.map((item) => (
                    <BlogCard key={item.id} blog={item} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;