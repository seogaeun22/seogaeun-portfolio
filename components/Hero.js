import { FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-greeting fade-in">GAME PROGRAMMER PORTFOLIO</span>
          <h1 className="hero-title fade-in delay-1">
            <span>입력은 짧게,</span>
            <span>경험은 오래 남게.</span>
          </h1>
          <p className="hero-subtitle fade-in delay-2">
            <span className="subtitle-line">AI 도구로 빠르게 실험하고, C++와 DirectX 12, Unreal Engine으로 플레이어의 조작이</span>
            <span className="subtitle-line">장면과 감각으로 이어지는 게임을 구현합니다.</span>
          </p>
          <div className="hero-actions fade-in delay-3">
            <a href="#ai-projects" className="btn btn-primary">
              AI 활용 프로젝트 보기
            </a>
            <a href="/resume" className="btn">
              이력서 보기 <FileText size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
