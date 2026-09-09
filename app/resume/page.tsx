'use client';

import React from 'react';
import { ArrowLeft, Printer, Mail, Phone, Github, Globe } from 'lucide-react';
import Link from 'next/link';
import { experimentsData, orderedProjectsData } from '@/components/Projects';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      <div className="container">
        <div className="resume-header-actions no-print">
          <Link href="/" className="btn">
            <ArrowLeft size={18} /> 포트폴리오로 돌아가기
          </Link>
          <button onClick={handlePrint} className="btn btn-primary">
            <Printer size={18} /> PDF로 저장 / 인쇄
          </button>
        </div>

        <div className="resume-paper">
          <div className="resume-title-section">
            <h1 className="resume-name">서가은 <span>Seo Gaeun</span></h1>
            <div className="resume-job">게임 프로그래머 (Game Programmer)</div>
            <p className="resume-intro">
              게임공학을 전공하며 C++ 기반 게임 프로그래밍과 게임 클라이언트 개발을 공부하고 있습니다.
              AI 도구를 활용해 구현 방향을 찾고, 직접 실행하고 확인하며 배운 내용을 실제 프로젝트에 적용하고 있습니다.
            </p>
          </div>

          <div className="resume-grid">
            <div className="resume-left-col">
              <div className="resume-section">
                <h2 className="resume-sec-title">Projects</h2>

                {orderedProjectsData.map((project) => (
                  <div className="resume-project-item" key={project.id}>
                    <img src={project.image} alt={project.title} className="resume-project-image" />
                    <div className="resume-proj-header">
                      <h3 className="resume-proj-title">{project.title}</h3>
                      <span className="resume-proj-date">{project.duration}</span>
                    </div>
                    <div className="resume-proj-tech">
                      사용 기술: <strong>{project.details.techStack.join(', ')}</strong> ({project.teamSize})
                    </div>
                    <div className="resume-proj-desc">
                      <p>{project.details.summary}</p>
                      <ul>
                        <li><strong>담당 역할:</strong> {project.role}</li>
                      </ul>
                    </div>
                    <div className="resume-proj-links">
                      {project.playLink && (
                        <a href={project.playLink} target="_blank" rel="noopener noreferrer">플레이 영상</a>
                      )}
                      {project.details.githubLinks.map((githubLink, index) => (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" key={githubLink}>
                          {project.details.githubLinks.length > 1 ? `GitHub ${index + 1}` : 'GitHub'}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="resume-section">
                <h2 className="resume-sec-title">Animation Works</h2>
                <div className="resume-project-item">
                  <div className="resume-animation-thumbs">
                    {experimentsData.map((experiment) => (
                      <a href={experiment.playLink} target="_blank" rel="noopener noreferrer" key={experiment.id}>
                        <img src={experiment.image} alt={experiment.title} />
                        <span>{experiment.tool}</span>
                      </a>
                    ))}
                  </div>
                  <div className="resume-proj-desc">
                    <ul>
                      {experimentsData.map((experiment) => (
                        <li key={experiment.id}><strong>{experiment.title}:</strong> {experiment.description}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="resume-section">
                <h2 className="resume-sec-title">Education</h2>
                <div className="resume-edu-item">
                  <div className="resume-edu-title">한국공학대학교 게임공학과</div>
                  <div className="resume-edu-date">2022.03 ~ 현재 (재학)</div>
                </div>
              </div>
            </div>

            <div className="resume-right-col">
              <div className="resume-section">
                <h2 className="resume-sec-title">Contact</h2>
                <ul className="resume-contact-list">
                  <li>
                    <Mail size={16} className="contact-icon" />
                    <a href="mailto:seogaeun@tukorea.ac.kr">seogaeun@tukorea.ac.kr</a>
                  </li>
                  <li>
                    <Phone size={16} className="contact-icon" />
                    <span>010-6513-2117</span>
                  </li>
                  <li>
                    <Github size={16} className="contact-icon" />
                    <a href="https://github.com/seogaeun22" target="_blank" rel="noopener noreferrer">GitHub 프로필</a>
                  </li>
                  <li>
                    <Globe size={16} className="contact-icon" />
                    <a href="https://seogaeun.com" target="_blank" rel="noopener noreferrer">seogaeun.com</a>
                  </li>
                </ul>
              </div>

              <div className="resume-section">
                <h2 className="resume-sec-title">Skills</h2>
                <div className="resume-skill-group">
                  <div className="resume-skill-group-title">Core Skills</div>
                  <div className="resume-skill-tags">
                    <span className="skill-tag core">C++</span>
                    <span className="skill-tag core">DirectX 12</span>
                  </div>
                </div>
                <div className="resume-skill-group">
                  <div className="resume-skill-group-title">Familiar / Tools</div>
                  <div className="resume-skill-tags">
                    <span className="skill-tag">Unreal Engine</span>
                    <span className="skill-tag">Git</span>
                  </div>
                </div>
              </div>

              <div className="resume-section">
                <h2 className="resume-sec-title">Experience</h2>
                <div className="resume-edu-item">
                  <div className="resume-edu-title">C/C++ 프로그래밍 학술 멘토</div>
                  <div className="resume-edu-date">2024 1, 2학기 / 2026 1학기</div>
                  <div className="resume-edu-desc">학과 내 C/C++ 멘토링 진행</div>
                </div>
                <div className="resume-edu-item">
                  <div className="resume-edu-title">kbs 바이브코딩 특강 조교</div>
                  <div className="resume-edu-date">2026.04 / 2026.07</div>
                  <div className="resume-edu-desc">바이브코딩 단기 특강 조교 활동</div>
                </div>
                <div className="resume-edu-item">
                  <div className="resume-edu-title">cbs AI 집중교육 조교</div>
                  <div className="resume-edu-date">2026.02</div>
                  <div className="resume-edu-desc">n8n 단기 특강 조교 활동</div>
                </div>
                <div className="resume-edu-item">
                  <div className="resume-edu-title">2026 재밌넥 게임잼 참가</div>
                  <div className="resume-edu-date">2026.07</div>
                  <div className="resume-edu-desc">영상형 시뮬레이션 게임 제작</div>
                </div>
                <div className="resume-edu-item">
                  <div className="resume-edu-title">게임공학과 학생회 부원</div>
                  <div className="resume-edu-date">2022.03 ~ 2023.02</div>
                  <div className="resume-edu-desc">학과 내 행사 기획 및 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
