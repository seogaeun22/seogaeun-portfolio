import React, { useEffect, useRef } from 'react';
import { getGithubLabel } from '@/lib/project-links';
import { X, Github, Play, Download } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const modalContentRef = useRef(null);
  const targetScrollRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef(null);

  // Prevent scrolling on the body and attach custom smooth wheel scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const container = modalContentRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const maxScroll = container.scrollHeight - container.clientHeight;
      
      // If not currently animating a smooth scroll, sync target with current scrollTop
      if (!isAnimatingRef.current) {
        targetScrollRef.current = container.scrollTop;
      }
      
      // Calculate new target position with a comfortable multiplier
      targetScrollRef.current = Math.min(Math.max(targetScrollRef.current + e.deltaY * 1.3, 0), maxScroll);
      
      isAnimatingRef.current = true;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        isAnimatingRef.current = false;
      }, 400);

      container.scrollTo({
        top: targetScrollRef.current,
        behavior: 'smooth'
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = 'auto';
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" ref={modalContentRef} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="modal-header-image" 
          />
        )}
        
        <div className="modal-body">
          <h3 className="modal-title">{project.title}</h3>
          {project.details?.genre && (
            <p className="modal-subtitle">{project.details.genre}</p>
          )}

          {project.details?.summary && (
            <div className="modal-section">
              <h4>프로젝트 소개</h4>
              <p><strong>한 줄 요약:</strong> {project.details.summary}</p>
              {project.details.versionNote && <p>{project.details.versionNote}</p>}
            </div>
          )}

          <div className="modal-section">
            <h4>기본 정보</h4>
            <ul>
              <li><strong>개발 기간:</strong> {project.duration}</li>
              <li><strong>팀 구성:</strong> {project.teamSize}</li>
              <li><strong>담당 역할:</strong><ul>{project.roleItems.map((role) => <li key={role}>{role}</li>)}</ul></li>
            </ul>
          </div>

          {project.details?.goals && project.details.goals.length > 0 && (
            <div className="modal-section">
              <h4>개발 목표</h4>
              <ul>
                {project.details.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>
          )}

          {project.details?.techStack && (
            <div className="modal-section">
              <h4>사용 기술</h4>
              <div className="modal-tech-stack">
                {project.details.techStack.map((tech, idx) => (
                  <span key={idx} className="modal-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-links">
            {project.details?.githubLinks?.map((link, idx) => (
              <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="btn">
                <Github size={18} /> {getGithubLabel(link)}
              </a>
            )) || (project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                <Github size={18} /> {getGithubLabel(project.github)}
              </a>
            ))}

            {project.details?.playLinks ? (
              project.details.playLinks.map((linkObj, idx) => (
                <a key={idx} href={linkObj.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Play size={18} /> {linkObj.name}
                </a>
              ))
            ) : (
              project.playLink && (
                <a href={project.playLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Play size={18} /> 영상 보기
                </a>
              )
            )}

            {project.details?.reportFile && (
              <a href={project.details.reportFile} download={project.details.reportFileName || "다운로드"} className="btn">
                <Download size={18} /> {project.details.reportFile.endsWith('.zip') ? '게임 다운로드' : '보고서 다운로드'}
              </a>
            )}

            {project.details?.downloads?.map((download, idx) => (
              <a key={`download-${idx}`} href={download.url} download={download.fileName || download.label} className="btn">
                <Download size={18} /> {download.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
