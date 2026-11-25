'use client';

import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

export default function ProjectVideoPreview({ image, alt, videoId, title }: {
  image: string;
  alt: string;
  videoId: string;
  title: string;
}) {
  const [isPreviewing, setIsPreviewing] = useState(false);

  return (
    <ImageLightbox src={image} alt={alt}><span
      className="dc-video-preview"
      onMouseEnter={() => setIsPreviewing(true)}
      onMouseLeave={() => setIsPreviewing(false)}
      onFocus={() => setIsPreviewing(true)}
      onBlur={() => setIsPreviewing(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} />
      {isPreviewing && (
        <iframe
          className="project-video-preview"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0`}
          title={`${title} preview`}
          tabIndex={-1}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </span></ImageLightbox>
  );
}
