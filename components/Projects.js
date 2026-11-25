"use client";

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export const experimentsData = [
  {
    id: "unreal-animation",
    title: "MetaHuman Cinematic",
    description: "Unreal Engine의 MetaHuman을 활용해 캐릭터 중심의 짧은 시네마틱을 제작했습니다.",
    tool: "Unreal Engine · MetaHuman",
    playLink: "https://youtu.be/Y2BMvJFtx20?si=NcvgcZD-LYBagvNR",
    image: "https://img.youtube.com/vi/Y2BMvJFtx20/maxresdefault.jpg"
  },
  {
    id: "unity-animation",
    title: "Unity Character Animation",
    description: "모델링, 리깅, 애니메이션 제작을 직접 진행하며 캐릭터 제작 흐름을 경험했습니다.",
    tool: "Unity · Modeling · Rigging",
    playLink: "https://youtu.be/GhddiflIppY?si=J9Y7g5K9TIISYMVg",
    image: "https://img.youtube.com/vi/GhddiflIppY/maxresdefault.jpg"
  }
];

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

function ExperimentCard({ experiment }) {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const youtubeId = getYoutubeId(experiment.playLink);

  return (
    <a
      href={experiment.playLink}
      target="_blank"
      rel="noopener noreferrer"
      className="experiment-card"
      onMouseEnter={() => setIsPreviewing(true)}
      onMouseLeave={() => setIsPreviewing(false)}
      onFocus={() => setIsPreviewing(true)}
      onBlur={() => setIsPreviewing(false)}
    >
      <div className="experiment-thumb">
        <img src={experiment.image} alt={experiment.title} />
        {youtubeId && isPreviewing && (
          <iframe
            className="project-video-preview"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0`}
            title={`${experiment.title} preview`}
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
        <span className="experiment-play">Play</span>
      </div>
      <div className="experiment-content">
        <span className="experiment-tool">{experiment.tool}</span>
        <h3>{experiment.title}</h3>
        <p>{experiment.description}</p>
      </div>
    </a>
  );
}

export const projectsData = [
  {
    id: 5,
    category: "ai",
    aiFocus: "Codex 게임 개발 · AI 보이스·3D 모델 제작",
    aiUsage: [
      { tool: "OpenAI Codex", usage: "게임 코드 구현에 활용" },
      { tool: "Inworld", usage: "캐릭터 대사 보이스 제작" },
      { tool: "Tripo", usage: "용사 캐릭터 3D 모델 제작" }
    ],
    title: "Dragon's Cut",
    detailPath: "/projects/dragons-cut",
    github: "https://github.com/dionme2622/Epic_AI_MegaJam",
    genre: "3D Puzzle Adventure / PC",
    duration: "2026.11.12 ~ 2026.11.15",
    teamSize: "3인 프로젝트",
    role: "Codex를 활용한 개발, 오프닝·엔딩 시퀀서 제작, Inworld 캐릭터 보이스 및 Tripo 용사 모델 제작, 자막·음성 및 WeLoveIndies 사운드 적용, 플레이 테스트와 음성·모델 적용 오류 수정",
    roleItems: [
      "AI 활용 개발: OpenAI Codex를 활용한 게임 개발과 플레이 테스트",
      "AI 보이스·모델: Inworld 캐릭터 대사 보이스 및 Tripo 용사 모델 제작",
      "시네마틱: Unreal Engine 시퀀서로 오프닝·엔딩 제작",
      "인게임 적용: 자막·음성 및 WeLoveIndies 사운드 적용",
      "오류 수정: 대사 음성 연결 누락과 모델 디테일 이상 수정"
    ],
    gameLink: "https://seogaeun22.itch.io/dragons-cut",
    playLink: "https://youtu.be/CHJFBZ8OWZ4",
    image: "/projects/dragons-cut/thumbnail.png",
    details: {
      genre: "3D 퍼즐 어드벤처 / PC (Unreal Engine)",
      summary: "그래픽 설정을 바꾸며 숨겨진 단서를 찾는 3D 퍼즐 어드벤처 게임입니다. 영화에서 편집되어 사라진 다리를 되찾기 위해 드래곤이 촬영장 뒤편을 탐험합니다. OpenAI Codex를 활용해 개발하고, Inworld로 캐릭터 보이스를, Tripo로 용사 모델을 제작했습니다.",
      goals: [
        "2026 Epic AI MegaJam 출품",
        "AI 도구를 활용한 캐릭터 모델·보이스 제작 및 게임 개발",
        "시퀀서 연출과 자막·음성·사운드를 연결한 게임 경험 구성"
      ],
      techStack: ["Unreal Engine", "Sequencer", "Inworld", "Tripo", "OpenAI Codex"],
      githubLinks: ["https://github.com/dionme2622/Epic_AI_MegaJam"],
      playLinks: [
        { name: "플레이 영상", url: "https://youtu.be/CHJFBZ8OWZ4" }
      ],
      audioCredit: {
        name: "WeLoveIndies",
        url: "https://www.weloveindies.com/"
      }
    }
  },
  {
    id: 1,
    category: "general",
    title: "Sandy Heroes",
    detailPath: "/projects/sandy-heroes",
    genre: "3D PvE FPS / PC",
    duration: "2024.09 ~ 2025.08",
    teamSize: "3인 프로젝트",
    role: "그림자 매핑, 파티클 시스템, 충돌 처리, 길찾기 알고리즘 구현 및 맵·콘텐츠 제작 담당",
    roleItems: ["렌더링: 정적·스킨 메시 그림자 매핑, 발사·피격 파티클","충돌: 벽·계단·대쉬 및 총알 판정 개선","콘텐츠: 맵·피라미드·다양한 총기 수집, 보물상자 스크롤 효과 / 별도 이력: A* 길찾기"],
    github: "https://github.com/klop2211/SandyHeroesClient",
    playLink: "https://youtu.be/CVMWE64RcTc?si=x7CyGJ1dE2HHoyMh",
    image: "https://img.youtube.com/vi/CVMWE64RcTc/maxresdefault.jpg",
    details: {
      genre: "3D PvE FPS 게임 / PC",
      summary: "총기·속성·스크롤을 조합해 스테이지를 돌파하는 DirectX 12 기반 PvE FPS입니다. 클라이언트 팀원으로 그림자·파티클·충돌·맵 콘텐츠를 담당했습니다.",
      versionNote: "싱글플레이 버전을 기반으로 멀티플레이 기능을 추가한 확장 버전입니다.",
      goals: [
        "Component 구조를 사용한 게임 프레임워크",
        "기하 쉐이더를 사용한 파티클 시스템과 몰입감을 높여주는 컷신 시스템",
        "클라이언트와 서버의 연동을 위한 Lock 없는 IOCP 서버 구현"
      ],
      techStack: ["C++", "DirectX 12", "IOCP"],
      githubLinks: [
        "https://github.com/klop2211/SandyHeroesClient",
        "https://github.com/ehdxorhrl/SandyHeroes_--"
      ],
      reportFile: "/reports/[양식] 2025 게임공학과 최종 보고서.hwp",
      reportFileName: "2025 게임공학과 최종 보고서.hwp"
    }
  },
  {
    id: 2,
    category: "general",
    title: "The Hollow Bow",
    genre: "3D PvE / PC",
    duration: "2025.06.18 ~ 2025.06.20",
    teamSize: "1인 프로젝트",
    role: "기획 및 블루프린트 기반의 전체 게임플레이 시스템 개발",
    roleItems: ["기획 및 블루프린트 기반의 전체 게임플레이 시스템 개발"],
    github: "https://github.com/seogaeun22",
    playLink: "https://youtu.be/K9KKlUR2OVY?si=DSWlTxJqc0U4_vky",
    image: "https://img.youtube.com/vi/K9KKlUR2OVY/maxresdefault.jpg",
    details: {
      genre: "3D PvE 게임 / PC (언리얼 엔진)",
      summary: "불꽃 화살을 쏘는 궁수가 판타지 숲에만 존재하는 신비의 트로피를 구하러 가는 게임입니다.",
      goals: [
        "Unreal Engine의 Blueprint를 활용한 PvE 게임 구현",
      ],
      techStack: ["Unreal Engine 5.3", "Blueprint"],
      githubLinks: [
        "https://github.com/seogaeun22"
      ],
      playLinks: [
        { name: "게임 소개 (처음부터)", url: "https://youtu.be/K9KKlUR2OVY?si=DSWlTxJqc0U4_vky" },
        { name: "게임 플레이 (6분 22초부터)", url: "https://youtu.be/K9KKlUR2OVY?t=382" }
      ]
    }
  },
  {
    id: 3,
    category: "ai",
    aiFocus: "기획·검토·조정과 AI를 활용한 Direct2D 게임 제작",
    aiUsage: [
      { tool: "ChatGPT", usage: "기획 보완과 이미지 제작" },
      { tool: "Codex", usage: "코드 작성·수정, 에셋 적용과 빌드 확인" },
      { tool: "Suno AI", usage: "게임 BGM 제작" }
    ],
    title: "Diet Defense",
    detailPath: "/projects/diet-defense",
    genre: "2D Tower Defense / PC",
    duration: "2026.07.03 ~ 2026.07.05",
    teamSize: "1인 프로젝트",
    role: "컨셉·기획 검토, Codex를 활용한 Direct2D 구현, AI 이미지 선택·도트 보정, UI·밸런스 조정 및 Suno BGM 적용",
    roleItems: ["기획·판단: 컨셉과 제작 방향 결정, 기획 검토","AI 활용 개발: Codex로 시스템 구현·수정 및 빌드 확인","리소스·조정: AI 이미지 적용·도트 보정, UI·밸런스 조정, BGM 적용"],
    github: "",
    playLink: "https://youtu.be/Jr1Cg_P9-L8?si=2UhyFg3MbtbPymJD",
    image: "/projects/diet-defense/title-current.png",
    details: {
      genre: "2D 타워 디펜스 게임 / PC",
      summary: "음식 몬스터를 막으며 체중과 의지력을 관리하는 Direct2D 타워 디펜스입니다. AI를 활용해 1인 제작하고, 이미지·UI·자원 밸런스를 검토하며 조정했습니다.",
      goals: [
        "Direct2D 기반 2D 타워 디펜스 게임 구현",
        "타워 배치, 타워 강화, 판매, 자원 관리 시스템 제작",
        "6개 웨이브와 3단계 스테이지, 스킬, 랜덤 이벤트 구성",
        "ChatGPT, Codex, Suno AI를 활용한 기획, 구현, 리소스 제작 보조"
      ],
      techStack: ["C++", "Direct2D", "ChatGPT", "Codex", "Suno AI"],
      githubLinks: [],
      playLinks: [
        { name: "플레이 영상", url: "https://youtu.be/Jr1Cg_P9-L8?si=2UhyFg3MbtbPymJD" }
      ],
      downloads: [
        {
          label: "보고서 다운로드",
          url: "/projects/diet-defense/diet_defense_work_report.pdf",
          fileName: "diet_defense_work_report.pdf"
        },
        {
          label: "게임 다운로드",
          url: "/projects/diet-defense/DietDefense_Final.zip",
          fileName: "DietDefense_Final.zip"
        }
      ]
    }
  },
  {
    id: 4,
    category: "ai",
    detailPath: "/projects/jamitnex",
    aiFocus: "Codex를 활용한 미니게임 개발·수정과 Suno AI BGM 제작",
    aiUsage: [
      { tool: "OpenAI Codex", usage: "미니게임 개발·수정 보조" },
      { tool: "Suno AI", usage: "게임 BGM 제작" }
    ],
    title: "재밌넥이라도 사랑은 하고 싶어",
    genre: "영상형 시뮬레이션 / PC",
    duration: "2026.07.24 ~ 2026.07.26",
    teamSize: "4인 프로젝트",
    role: "OpenAI Codex를 활용한 AI 기반 게임 개발, 메인 기획 및 시나리오 작성, 게임 화면·미니게임·UI 디자인, 미니 게임 개발, 실사 영상 연기, Suno AI를 활용한 BGM 제작, QA(게임 플레이 테스트 및 버그 발견·수정) 담당",
    roleItems: ["기획: 메인 기획·시나리오 작성","디자인·개발: 미니게임·UI 제작 및 Codex 활용","QA: 플레이 테스트·버그 발견과 수정","콘텐츠: 실사 영상 연기·Suno AI BGM 제작"],
    github: "https://github.com/Bazzi4263/MyFirst3D",
    playLink: "https://youtu.be/H6Mu9AAfaFk",
    image: "/projects/jamitnex/title-current.jpg",
    details: {
      genre: "영상형 시뮬레이션 / PC",
      summary: "소심한 남주인공(플레이어)이 '재밌넥' 게임잼에서 자신에게 말을 걸어준 여주인공과 함께 게임을 만들며 설렘을 느끼는 내용의 영상형 연애 시뮬레이션 게임입니다.",
      goals: [
        "2026 재밌넥 게임잼 프로젝트 출품",
        "영상형 연애 시뮬레이션의 기획·시나리오 및 미니게임 제작"
      ],
      techStack: ["Unity", "OpenAI Codex", "Suno AI"],
      githubLinks: [
        "https://github.com/Bazzi4263/MyFirst3D"
      ],
      playLinks: [
        { name: "플레이 영상", url: "https://youtu.be/H6Mu9AAfaFk" }
      ],
      reportFile: "/projects/jamitnex/jamitnex.zip",
      reportFileName: "재밌넥이라도 사랑은 하고 싶어.zip"
    }
  }
];

export const orderedProjectsData = [projectsData[1], projectsData[0], projectsData[4], projectsData[3], projectsData[2]];

export const aiProjectsData = [projectsData[0], projectsData[4], projectsData[3]];
export const generalProjectsData = projectsData.filter(project => project.category === 'general');

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <section id="ai-projects" className="project-group project-group-ai" aria-labelledby="ai-projects-title">
          <div className="project-group-heading">
            <h2 id="ai-projects-title">AI 활용 프로젝트</h2>
          </div>
          <div className="projects-grid ai-projects-grid">
            {aiProjectsData.map(project => (
              <ProjectCard key={project.id} project={project} onSelect={handleProjectClick} />
            ))}
          </div>
        </section>

        <section id="general-projects" className="project-group" aria-labelledby="general-projects-title">
          <div className="project-group-heading">
            <h2 id="general-projects-title">일반 개발 프로젝트</h2>
          </div>
          <div className="projects-grid general-projects-grid">
            {generalProjectsData.map(project => (
              <ProjectCard key={project.id} project={project} onSelect={handleProjectClick} />
            ))}
          </div>
        </section>

        <div className="experiments-section">
          <div className="experiments-heading">
            <span>Animation Works</span>
            <p>코딩뿐 아니라 캐릭터, 연출, 제작 파이프라인에도 관심을 가지고 작업한 짧은 애니메이션입니다.</p>
          </div>
          <div className="experiments-grid">
            {experimentsData.map(experiment => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
