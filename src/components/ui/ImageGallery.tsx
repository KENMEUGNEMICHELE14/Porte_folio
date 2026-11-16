"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageSlot from "./ImageSlot";

interface ImageGalleryProps {
  images?: string[];
  alt: string;
  hint?: string;
  className?: string;
}

export default function ImageGallery({ images = [], alt, hint, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si aucune image n'est fournie, on affiche le cadre vide habituel
  if (!images || images.length === 0) {
    return <ImageSlot alt={alt} hint={hint} className={className} />;
  }

  // S'il n'y a qu'une seule image, pas besoin de boutons de défilement
  if (images.length === 1) {
    return <ImageSlot src={images[0]} alt={alt} className={className} />;
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`group relative ${className}`}>
      {/* Image actuelle */}
      <ImageSlot
        src={images[currentIndex]}
        alt={`${alt} - photo ${currentIndex + 1}`}
        className="h-full w-full"
      />

      {/* Bouton Précédent */}
      <button
        type="button"
        onClick={prevImage}
        aria-label="Image précédente"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-1.5 text-white opacity-0 transition hover:bg-slate-900 group-hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Bouton Suivant */}
      <button
        type="button"
        onClick={nextImage}
        aria-label="Image suivante"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-1.5 text-white opacity-0 transition hover:bg-slate-900 group-hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Petits points indicateurs en bas */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/60 px-2.5 py-1">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Aller à l'image ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? "w-4 bg-sky-400" : "w-2 bg-slate-400/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}