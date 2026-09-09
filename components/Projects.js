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
    id: 1,
    title: "Sandy Heroes",
    genre: "3D PvE FPS / PC",
    duration: "2024.09 - 2025.08",
    teamSize: "3인 프로젝트",
    role: "그림자 매핑, 파티클 시스템, 충돌 처리, 길찾기 알고리즘 구현 및 맵·콘텐츠 제작 담당",
    github: "https://github.com/klop2211/SandyHeroesClient",
    playLink: "https://youtu.be/CVMWE64RcTc?si=x7CyGJ1dE2HHoyMh",
    image: "https://img.youtube.com/vi/CVMWE64RcTc/maxresdefault.jpg",
    details: {
      genre: "3D PvE FPS 게임 / PC",
      summary: "캐주얼한 PvE 스타일의 게임으로, 최대 3명이 함께 플레이할 수 있는 1인칭 15분짜리 FPS 게임입니다.",
      concept: "사막 고대 유적에 숨어있는 나쁜 용을 물리쳐라!",
      goals: [
        "Component 구조를 사용한 게임 프레임워크",
        "기하 쉐이더를 사용한 파티클 시스템과 몰입감을 높여주는 컷신 시스템",
        "클라이언트와 서버의 연동을 위한 Lock 없는 IOCP 서버 구현"
      ],
      techStack: ["C++", "DirectX12", "IOCP"],
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
    title: "The Hollow Bow",
    genre: "3D PvE / PC",
    duration: "2025.06.18 ~ 2025.06.20",
    teamSize: "1인 프로젝트",
    role: "기획, 레벨 디자인 및 블루프린트(Blueprint) 기반의 전체 게임플레이 시스템 및 UI 단독 개발",
    github: "https://github.com/seogaeun22",
    playLink: "https://youtu.be/K9KKlUR2OVY?si=DSWlTxJqc0U4_vky",
    image: "https://img.youtube.com/vi/K9KKlUR2OVY/maxresdefault.jpg",
    details: {
      genre: "3D PvE 게임 / PC (언리얼 엔진)",
      summary: "불꽃 화살을 쏘는 궁수가 판타지 숲에만 존재하는 신비의 트로피를 구하러 가는 게임입니다.",
      concept: "블루프린트를 통한 궁수 캐릭터의 전투 및 이동 메커니즘 설계",
      goals: [
        "Unreal Engine의 Blueprint를 활용한 PvE 게임 구현",
        "블루프린트를 통한 궁수 캐릭터의 전투 및 이동 메커니즘 설계",
        "레벨 디자인을 통한 적 배치 및 클리어 목표 설정"
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
    title: "Diet Defense",
    genre: "2D Tower Defense / PC",
    duration: "2026.07.03 ~ 2026.07.05",
    teamSize: "1인 프로젝트",
    role: "기획, Direct2D 기반 게임 구현, 타워·웨이브·스킬·이벤트 시스템 제작 및 AI 도구를 활용한 리소스 제작/개발 보조",
    github: "",
    playLink: "https://youtu.be/Jr1Cg_P9-L8?si=2UhyFg3MbtbPymJD",
    image: "/projects/diet-defense/thumbnail.png",
    details: {
      genre: "2D 타워 디펜스 게임 / PC",
      summary: "다이어트 코어를 지키며 몰려오는 음식 몬스터를 막아내는 Direct2D 기반 2D 타워 디펜스 게임입니다.",
      concept: "체중 60kg 도달을 막기 위해 타워를 배치하고, 웨이브와 이벤트를 넘기며 생존하는 캐주얼 디펜스",
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
    title: "재밌넥이라도 사랑은 하고 싶어",
    genre: "영상형 시뮬레이션 / PC",
    duration: "2026.07.24 ~ 2026.07.26",
    teamSize: "4인 프로젝트",
    role: "메인 기획 및 시나리오 작성, 디자인, 미니 게임 개발, 실사 영상 연기, Suno AI를 활용한 BGM 제작, 플레이 테스트 및 버그 수정 담당",
    github: "https://github.com/Bazzi4263/MyFirst3D",
    playLink: "https://youtu.be/H6Mu9AAfaFk",
    image: "/projects/jamitnex/thumbnail.png",
    details: {
      genre: "영상형 시뮬레이션 / PC",
      summary: "소심한 남주인공(플레이어)이 '재밌넥' 게임잼에서 자신에게 말을 걸어준 여주인공과 함께 게임을 만들며 설렘을 느끼는 내용의 영상형 연애 시뮬레이션 게임입니다.",
      concept: "STT 및 LLM 기술을 활용한 플레이어 상호작용 중심의 게임 개발",
      goals: [
        "2026 재밌넥 게임잼 프로젝트 출품",
        "STT 및 LLM 기술을 활용한 텍스트/음성 기반 상호작용형 영상 연애 시뮬레이션 개발"
      ],
      techStack: ["Unity", "STT", "LLM", "Suno AI"],
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

export const orderedProjectsData = [projectsData[0], projectsData[3], projectsData[2], projectsData[1]];

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
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {orderedProjectsData.map(project => (
            <div key={project.id} onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer' }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

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
