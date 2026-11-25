"use client";

import React, { useState } from 'react';
import { Github, Play, ExternalLink } from 'lucide-react';
import { getGithubLabel } from '@/lib/project-links';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function getYoutubeId(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.replace('/', '');
    }

    return parsedUrl.searchParams.get('v');
  } catch {
    return null;
  }
}

export default function ProjectCard({ project, onSelect }) {
  const router = useRouter();
  const [isPreviewing, setIsPreviewing] = useState(false);
  const youtubeId = getYoutubeId(project.playLink);

  return (
    <article
      className={`project-card${project.category === 'ai' ? ' project-card-ai' : ''}`}
      onClick={() => project.detailPath ? router.push(project.detailPath) : onSelect(project)}
      onMouseEnter={() => setIsPreviewing(true)}
      onMouseLeave={() => setIsPreviewing(false)}
      onFocus={() => setIsPreviewing(true)}
      onBlur={() => setIsPreviewing(false)}
    >
      <div className="project-image-wrapper">
        <img 
          src={project.image || "/api/placeholder/400/200"} 
          alt={project.title} 
          className="project-image" 
        />
        {youtubeId && isPreviewing && (
          <iframe
            className="project-video-preview"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0`}
            title={`${project.title} preview`}
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-genre">{project.genre}</span>
        </div>
        <p className="project-summary">{project.details.summary}</p>
        
        <div className="project-info">
          <p><strong>기간:</strong> {project.duration}</p>
          <p><strong>인원:</strong> {project.teamSize}</p>
        </div>
        
        <div className="project-role">
          <strong>담당 역할</strong>
          <ul>{project.roleItems.map((role) => <li key={role}>{role}</li>)}</ul>
        </div>
        
        <div className="project-links">
          {project.detailPath ? (
            <Link href={project.detailPath} className="project-detail-button" onClick={event => event.stopPropagation()} aria-label={`${project.title} 상세 보기`}>상세 보기</Link>
          ) : (
            <button type="button" className="project-detail-button" onClick={(event) => { event.stopPropagation(); onSelect(project); }} aria-label={`${project.title} 상세 보기`}>상세 보기</button>
          )}
          {project.gameLink && (
            <a href={project.gameLink} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={18} /> itch.io
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
              <Github size={18} /> {getGithubLabel(project.github)}
            </a>
          )}
          {project.playLink && (
            <a href={project.playLink} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
              <Play size={18} /> 플레이 영상
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
