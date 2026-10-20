import React from 'react';
import history from '@/data/history.json';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-grid">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img src="/profile.jpg" alt="서가은 프로필 사진" className="about-profile-image" />
              <div className="about-image-glow"></div>
            </div>
          </div>

          <div className="about-text">
            <p>
              안녕하세요. 게임공학을 전공하며 <strong>C++</strong> 기반 게임 프로그래밍과 <strong>게임 클라이언트 개발</strong>을 공부하고 있는 서가은입니다.<br />
              <strong>AI 도구</strong>를 활용해 구현 방향을 찾아보고, 막히는 부분을 작은 단위로 나누어 확인하며 개발 과정을 더 빠르고 명확하게 만드는 데 관심이 있습니다.
            </p>
            <p>
              <strong>DirectX 12</strong> 프로젝트에서는 <strong>그림자</strong>, <strong>파티클</strong>, <strong>충돌</strong>, <strong>길찾기</strong> 같은 기능을 맡아 구현했고, <strong>Unreal Engine</strong> 프로젝트에서는 전투 시스템과 레벨 구성을 직접 만들어 보며 플레이 흐름을 다듬었습니다.
              새로운 기술을 배울 때는 AI의 도움을 받아 이해의 폭을 넓히고, 실제로 실행해 보며 제 것으로 만드는 과정을 중요하게 생각합니다.
            </p>

            <div className="skills-section">
              <div className="skills-category">
                <h4 className="skills-category-title">Core Skills</h4>
                <div className="skills-container">
                  <span className="skill-tag core">C++</span>
                  <span className="skill-tag core">DirectX 12</span>
                </div>
              </div>

              <div className="skills-category">
                <h4 className="skills-category-title">Familiar / Tools</h4>
                <div className="skills-container">
                  <span className="skill-tag">Unreal Engine</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">AI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-experience">
            <h3 className="history-heading">Education &amp; Experience</h3>
            <div className="experience-list">
              {history.map((item) => (
                <div className="experience-item" key={item.id}>
                  <span className="exp-date">{item.date}</span>
                  <div className="exp-content">
                  <h4 className="exp-title">{item.title}</h4>
                  <span className="exp-company">{item.description}</span>
                  {item.certificate && (
                    <a className="exp-certificate" href={item.certificate} target="_blank" rel="noopener noreferrer">상장 보기 ↗</a>
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
