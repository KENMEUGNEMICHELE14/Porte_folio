import { ImageIcon } from "lucide-react";

interface ImageSlotProps {
  /** Chemin de l'image (ex: "/images/projects/roadtrack.jpg"). Vide = cadre en attente. */
  src?: string;
  alt: string;
  /** Indication affichée dans le cadre vide : où déposer l'image. */
  hint?: string;
  className?: string;
  fit?: "cover" | "contain";
}

/** Cadre d'image : affiche l'image si elle existe, sinon un cadre pointillé à remplir. */
export default function ImageSlot({ src, alt, hint, className = "", fit = "cover" }: ImageSlotProps) {
  if (src) {
    return (
      <div className={`overflow-hidden rounded-xl border border-slate-800 bg-slate-900 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-4 text-center text-slate-500 ${className}`}
      role="img"
      aria-label={`Emplacement d'image : ${alt}`}
    >
      <ImageIcon className="h-6 w-6" aria-hidden />
      <span className="text-xs font-medium">Image à ajouter</span>
      {hint && <code className="break-all text-[11px] text-slate-600">{hint}</code>}
    </div>
  );
}
