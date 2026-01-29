import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import blogData from "../../data/blogs.json";

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogData.find(b => b.id === Number(id));

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Post not found</h2>
                <Link to="/blogs" className="text-blue-600 font-bold hover:underline">Return to Blogs</Link>
            </div>
        );
    }

    return (
        <article className="bg-white min-h-screen antialiased">
            {/* Navigation Header */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="w-[95vw] md:w-[80vw] mx-auto h-16 flex items-center">
                    <Link to="/blogs" className="flex items-center gap-2 text-sm font-bold text-[#1d1d1f] hover:text-blue-600 transition-colors">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                </div>
            </nav>

            {/* 1. Hero Header */}
            <header className="pt-32 pb-16 md:pt-48 md:pb-24">
                <div className="w-[95vw] md:w-[80vw] mx-auto text-center">
                    <div className="mb-8">
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600">
                            {blog.category}
                        </span>
                        <span className="mx-3 text-gray-300">•</span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86868b]">
                            {blog.date}
                        </span>
                    </div>

                    <h1 className="text-[36px] md:text-[64px] font-bold tracking-tighter leading-[1.1] text-[#1d1d1f] max-w-4xl mx-auto mb-16">
                        {blog.title}
                    </h1>

                    <div className="aspect-[21/9] w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-2xl shadow-blue-900/5">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </header>

            {/* 2. Article Content */}
            <div className="max-w-5xl mx-auto px-6 pb-32">
                <div className="space-y-10">
                    <p className="text-[20px] md:text-[24px] leading-relaxed text-[#1d1d1f] font-medium italic border-l-4 border-blue-600 pl-8 mb-16">
                        {blog.excerpt}
                    </p>

                    {/* DYNAMIC CONTENT RENDERER */}
                    <div className="space-y-8">
                        {blog.content && blog.content.map((section, index) => {
                            if (section.type === "heading") {
                                return (
                                    <h2 key={index} className="text-[28px] md:text-[32px] font-bold text-[#1d1d1f] tracking-tight pt-4">
                                        {section.text}
                                    </h2>
                                );
                            }
                            if (section.type === "paragraph") {
                                return (
                                    <p key={index} className="text-[#424245] text-lg leading-relaxed">
                                        {section.text}
                                    </p>
                                );
                            }
                            if (section.type === "takeaway") {
                                return (
                                    <div key={index} className="p-10 bg-[#f5f5f7] rounded-[2.5rem] border border-gray-100 my-12">
                                        <h4 className="text-[14px] font-bold uppercase tracking-widest text-blue-600 mb-4">Key Takeaway</h4>
                                        <p className="text-[#1d1d1f] font-bold text-xl leading-tight">
                                            "{section.text}"
                                        </p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* Footer Signature */}
                <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af]" />
                        <div>
                            <p className="text-sm font-bold text-[#1d1d1f]">Agilis Editorial Team</p>
                            <p className="text-xs text-[#86868b]">Insights & Strategy</p>
                        </div>
                    </div>
                    <button className="px-8 py-3 bg-[#f5f5f7] text-[#1d1d1f] rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
                        Share Article
                    </button>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;