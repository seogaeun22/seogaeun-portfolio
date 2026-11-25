'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Minus, Plus, X } from 'lucide-react';

export default function ImageLightbox({ src, alt, children }: { src: string; alt: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const dialog = useRef<HTMLDialogElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!open) return;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const fit = () => {
      const photo = image.current;
      if (!photo?.naturalWidth) return;
      const scale = Math.min(1, (window.innerWidth - 48) / photo.naturalWidth, (window.innerHeight - 120) / photo.naturalHeight);
      setSize({ width: photo.naturalWidth * scale, height: photo.naturalHeight * scale });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('resize', fit);
    };
  }, [open]);

  return <>
    <button type="button" className="image-lightbox-trigger" aria-label={`${alt} — 이미지 확대 보기`} onClick={() => { setZoom(1); setSize({ width: 0, height: 0 }); setOpen(true); }}>
      {children}
    </button>
    {open && (
      <dialog ref={dialog} className="image-viewer" aria-label={alt} onClose={() => setOpen(false)}>
        <div className="image-viewer-toolbar">
          <button type="button" aria-label="사진 축소" disabled={zoom <= 0.5} onClick={() => setZoom(value => Math.max(0.5, value - 0.25))}><Minus size={20} /></button>
          <button type="button" aria-label="사진 크기 초기화" onClick={() => setZoom(1)}>{Math.round(zoom * 100)}%</button>
          <button type="button" aria-label="사진 확대" disabled={zoom >= 4} onClick={() => setZoom(value => Math.min(4, value + 0.25))}><Plus size={20} /></button>
          <button type="button" className="image-viewer-close" aria-label="사진 닫기" autoFocus onClick={() => dialog.current?.close()}><X size={24} /></button>
        </div>
        <div className="image-viewer-stage"><div className="image-viewer-canvas">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={image} className="image-viewer-photo" src={src} alt={alt}
            onLoad={event => {
              const photo = event.currentTarget;
              const scale = Math.min(1, (window.innerWidth - 48) / photo.naturalWidth, (window.innerHeight - 120) / photo.naturalHeight);
              setSize({ width: photo.naturalWidth * scale, height: photo.naturalHeight * scale });
            }}
            style={size.width ? { width: size.width * zoom, height: size.height * zoom } : undefined} />
        </div></div>
      </dialog>)}
  </>;
}
