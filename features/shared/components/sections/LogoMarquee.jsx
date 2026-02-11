import React from 'react';

const LogoMarquee = ({ 
  speed = "15s", 
  logos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"] 
}) => {
  return (
    <section className="py-8">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marqueeScroll ${speed} linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
        {/* Gradients de fondu (Masques latéraux) */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-third to-transparent" />
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-third to-transparent" />

        <div className="marquee-container flex will-change-transform">
          {/* On double la liste pour créer l'effet de boucle infinie sans saut */}
          {[...logos, ...logos].map((company, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <img
                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                alt={`${company} logo`}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;