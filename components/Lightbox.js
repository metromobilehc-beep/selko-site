'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Click-to-enlarge for the real product screenshots on /healthcare and
// /demo — these are dense data tables (staff names, statuses, dates)
// that are genuinely hard to read at inline size. The interaction only
// exists because the content demands it, not as decoration: opening
// and closing are the only motion here, both directly triggered by
// the person clicking, per the "motion that answers a person's
// action" guidance rather than any ambient/scroll-triggered effect.
export default function Lightbox({ src, alt, width, height, className }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`block w-full text-left cursor-zoom-in group relative ${className || ''}`}
        aria-label={`Enlarge screenshot: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto block"
        />
        <span className="absolute bottom-3 right-3 bg-ink/80 text-paper text-xs font-mono px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          Click to enlarge
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-ink/90 z-50 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-paper font-mono text-sm border border-paper/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-paper/10 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[92vw] max-h-[90vh] w-auto h-auto object-contain rounded-[10px] cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
