"use client";
import { useState } from "react";
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowDown, MdSearch, MdClose } from "react-icons/md";

const MasonryGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [loaded, setLoaded] = useState({});
  const [selectedImg, setSelectedImg] = useState(null); // État pour la Lightbox

  const images = [
    ["image.jpg", "image-1.jpg", "image-2.jpg"],
    ["image-3.jpg", "image-4.jpg", "image-5.jpg"],
    ["image-6.jpg", "image-7.jpg", "image-8.jpg"],
    ["image-9.jpg", "image-10.jpg", "image-11.jpg"],
  ];

  const displayImages = showAll 
    ? images 
    : images.map(column => [column[0]]);

  const handleImageLoad = (id) => {
    setLoaded(prev => ({ ...prev, [id]: true }));
  };

  const baseUrl = "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/";

  return (
    <div className="flex flex-col items-center gap-8 w-full mt-12 relative">
      <SkeletonTheme baseColor="#f3f4f6" highlightColor="#ffffff">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {displayImages.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              <AnimatePresence>
                {column.map((src, imgIndex) => {
                  const imageId = `${colIndex}-${imgIndex}`;
                  const fullUrl = `${baseUrl}${src}`;
                  
                  return (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedImg(fullUrl)}
                      className="relative overflow-hidden rounded-4xl shadow-sm bg-gray-100 cursor-pointer group"
                    >
                      {/* OVERLAY LOUPE AU HOVER */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 z-20 bg-black/30 flex items-center justify-center transition-all"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40"
                        >
                          <MdSearch className="text-white text-3xl" />
                        </motion.div>
                      </motion.div>

                      {/* SKELETON */}
                      {!loaded[imageId] && (
                        <div className="absolute inset-0 z-10">
                          <Skeleton height="100%" containerClassName="flex-1 h-full leading-none" />
                        </div>
                      )}

                      <Image
                        src={fullUrl}
                        alt={`Gallery image ${src}`}
                        width={500}
                        height={600}
                        onLoadingComplete={() => handleImageLoad(imageId)}
                        className={`h-auto max-w-full object-cover transition-all duration-500 group-hover:scale-110 ${
                          loaded[imageId] ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </SkeletonTheme>

      {/* BOUTON VOIR PLUS */}
      {!showAll && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(true)}
          className="group flex items-center gap-1 bg-white/50 px-8 py-2 rounded-full hover:border-secondary transition-all"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Toutes les images</span>
          <MdKeyboardArrowDown className="text-secondary group-hover:translate-y-1 transition-transform mb-1" size={24} />
        </motion.button>
      )}

      {/* LIGHTBOX (MODALE PLEIN ÉCRAN) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)} // Ferme au clic extérieur
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            {/* Bouton fermer */}
            <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                <MdClose size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur l'image
            >
              <Image
                src={selectedImg}
                alt="Enlarged view"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGallery;