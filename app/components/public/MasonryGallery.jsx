"use client";
import { useState } from "react";
import Image from "next/image";
import { MdClose, MdSearch } from "react-icons/md";

const MasonryGallery = ({ images = [] }) => {
  const [loaded, setLoaded] = useState({});
  const [selectedImg, setSelectedImg] = useState(null);

  const cols = [[], []];
  images.forEach((img, i) => {
    cols[i % 2].push(img);
  });

  return (
    <>
      <div className="grid mt-6 grid-cols-2 gap-3">
        {cols.map((col, i) => (
          <div key={i}>
            {col.map((img) => (
              <div
                key={img.id}
                className="relative cursor-pointer group mb-3"
                onClick={() => setSelectedImg(`https://jwennjob.com${img.url}`)}
              >
                {!loaded[img.id] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl" />
                )}
                
                {/* Overlay avec icône */}
                <div className="absolute inset-0 z-10 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-3xl">
                  <MdSearch className="text-white text-4xl" />
                </div>

                <Image
                  src={`https://jwennjob.com${img.url}`}
                  alt=""
                  width={600}
                  height={600}
                  onLoadingComplete={() => setLoaded((p) => ({ ...p, [img.id]: true }))}
                  className={`h-auto rounded-3xl w-full block transition-opacity duration-300 ${
                    loaded[img.id] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImg(null)}
          >
            <MdClose size={32} />
          </button>
          <Image
            src={selectedImg}
            alt=""
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] h-auto w-auto object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default MasonryGallery;