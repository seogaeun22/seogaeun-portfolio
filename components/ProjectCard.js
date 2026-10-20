"use client";

import React, { useState } from 'react';
import { Github, Play } from 'lucide-react';
import { getGithubLabel } from '@/lib/project-links';

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

export default function ProjectCard({ project }) {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const youtubeId = getYoutubeId(project.playLink);

  return (
    <div
      className="project-card"
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
        
        <div className="project-info">
          <p><strong>기간:</strong> {project.duration}</p>
          <p><strong>인원:</strong> {project.teamSize}</p>
        </div>
        
        <div className="project-role">
          <strong>담당 역할</strong>
          <ul>{project.roleItems.map((role) => <li key={role}>{role}</li>)}</ul>
        </div>
        
        <div className="project-links">
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
    </div>
  );
}
