"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  mainImage: string;
  gallery: string[];
  productName: string;
}

export default function ProductGallery({
  mainImage,
  gallery,
  productName,
}: ProductGalleryProps) {
  const allImages = [mainImage, ...gallery].filter(Boolean);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentImage = allImages[selectedIndex] || mainImage;

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50">
        <Image
          src={currentImage}
          alt={productName}
          fill
          unoptimized
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {allImages.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors cursor-pointer ${
                selectedIndex === index
                  ? "border-[#e8772e]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} - vue ${index + 1}`}
                fill
                unoptimized
                className="object-contain p-1"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
