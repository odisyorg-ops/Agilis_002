import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  // Replace this ID with your actual YouTube Video ID
  // const youtubeId = "dQw4w9WgXcQ"; 
  const youtubeId = "XPc07NSpFqM"; 
  // https://youtu.be/XPc07NSpFqM

  return (
    <section className="py-10 bg-white">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Optional Section Header */}
        

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          
          
          {/* The Actual Player */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl ">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoSection;