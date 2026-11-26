import Link from 'next/link';
import ImageLightbox from '@/components/ImageLightbox';
import ProjectVideoPreview from '@/components/ProjectVideoPreview';
import designPrompt from '@/data/jamitnex-design-prompt.json';
import { Github, Play, Download } from 'lucide-react';

const repository = 'https://github.com/Bazzi4263/MyFirst3D';
const revision = 'e4475b8';
const source = (path: string) => `${repository}/blob/${revision}/Assets/${path}`;
const runtime = 'WordSentenceClickPrototype/Runtime/';
const commit = (id: string) => `${repository}/commit/${id}`;
const assets = '/projects/jamitnex';

export const metadata = {
  title: '재밌넥이라도 사랑은 하고 싶어 | 서가은 포트폴리오',
  description: '실사 영상형 연애 시뮬레이션. 실제 제작 대화를 바탕으로 미니게임·UI의 요구 조건을 정하고, AI 구현 결과를 검토·수정한 과정을 소개합니다.',
  openGraph: {
    title: '재밌넥이라도 사랑은 하고 싶어 | 서가은 포트폴리오',
    description: '게임잼에서 시작된 설렘을 영상과 미니게임으로 풀어낸 4인 프로젝트입니다.',
    url: 'https://seogaeun.com/projects/jamitnex',
    images: [{ url: `${assets}/thumbnail.png`, width: 1536, height: 1024, alt: '재밌넥이라도 사랑은 하고 싶어 썸네일' }],
  },
};

function ProjectCapture({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return (
    <figure className="dc-figure">
      <ImageLightbox src={`${assets}/${file}`} alt={alt}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${assets}/${file}`} alt={alt} loading="lazy" width={1536} height={864} />
      </ImageLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function AudioSample({ file, title, description }: { file: string; title: string; description: string }) {
  return (
    <figure className="dc-voice-sample">
      <figcaption>{title}<span>{description}</span></figcaption>
      <audio controls preload="none" aria-label={`${title} 듣기`}>
        <source src={`${assets}/${file}`} type="audio/mpeg" />
        <a href={`${assets}/${file}`}>오디오 파일 듣기</a>
      </audio>
    </figure>
  );
}

export default function JamitnexPage() {
  return (
    <main className="dc-page jamitnex-page">
      <div className="container">
        <header className="dc-topbar"><Link href="/#ai-projects">← 프로젝트 목록으로</Link><span>서가은 · 포트폴리오</span></header>
        <div id="intro" className="dc-overview">
          <header className="dc-header">
            <h1>재밌넥이라도<br />사랑은 하고 싶어</h1>
            <p className="dc-lead"><strong>게임잼에서 함께 게임을 만들며 설렘을 느끼는 실사 영상형 연애 시뮬레이션입니다.</strong> 소심한 주인공 현빈의 선택과 미니게임 결과에 따라 인물의 반응과 스토리가 달라집니다.</p>
            <dl className="dc-facts">
              <div><dt>개발 기간</dt><dd>2026.07.24 ~ 2026.07.26</dd></div>
              <div><dt>팀 구성</dt><dd>4인 프로젝트</dd></div>
              <div><dt>개발 환경</dt><dd>Unity 6 · C# · PC</dd></div>
              <div><dt>AI 활용</dt><dd>OpenAI Codex · Suno AI</dd></div>
              <div><dt>제작 배경</dt><dd>2026 재밌넥 게임잼</dd></div>
            </dl>
            <div className="dc-links">
              <a className="btn btn-primary" href="https://youtu.be/H6Mu9AAfaFk" target="_blank" rel="noopener noreferrer"><Play size={18} />플레이 영상</a>
              <a className="btn" href={repository} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub 저장소 보기</a>
              <a className="btn" href={`${assets}/jamitnex.zip`} download="재밌넥이라도 사랑은 하고 싶어.zip"><Download size={18} />게임 다운로드</a>
            </div>
          </header>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <ProjectVideoPreview image={`${assets}/thumbnail.png`} alt="재밌넥이라도 사랑은 하고 싶어 썸네일" videoId="H6Mu9AAfaFk" title="재밌넥이라도 사랑은 하고 싶어" />
        </div>

        <div className="dc-body">
          <nav className="dc-toc" aria-label="상세 페이지 목차">
            <a href="#intro">게임 소개</a><a href="#contribution">담당 작업</a><a href="#implementation">요청과 결과 검토</a><a href="#results">결과 화면·음성</a><a href="#fixes">문제 발견과 재지시</a>
          </nav>
          <article className="dc-article" aria-label="재밌넥이라도 사랑은 하고 싶어 프로젝트 상세">
            <section id="contribution" className="dc-section">
              <h2>담당 작업</h2>
              <p className="dc-takeaway">스토리 속 행동을 미니게임으로 옮기기 위해 규칙과 화면의 조건을 정했습니다. Codex에 구현을 요청하고, 결과를 확인해 가독성·조작·진행 문제를 다시 수정하도록 지시했습니다.</p>
              <dl className="dc-contributions">
                <div><dt>기획·시나리오</dt><dd>메인 기획과 시나리오 작성</dd></div>
                <div><dt>디자인·개발</dt><dd>게임 화면·미니게임·UI 디자인, 미니게임 구현 및 UI 구조 통합</dd></div>
                <div><dt>AI 활용 개발·QA</dt><dd>요구 조건 설정, 구현 결과의 플레이 테스트·문제 발견·재지시. Codex는 코드 작성·수정과 오류 분석을 수행</dd></div>
                <div><dt>영상·음악</dt><dd>실사 영상 연기, Suno AI를 활용한 BGM 제작</dd></div>
              </dl>
            </section>

            <section id="implementation" className="dc-section">
              <h2>요청과 결과 검토</h2>
              <p className="dc-source">짧은 인용문은 2026.07.25~07.26 제작 대화에서 제가 보낸 요청의 일부를 원문 그대로 발췌했습니다. 과정 설명은 대화와 최종 소스를 대조한 요약이며, AI가 작성한 프롬프트는 별도로 표시했습니다.</p>
              {/* 요청 근거: 019f9a9d 2026-07-25T18:50:35Z, 019f9b20 2026-07-25T21:38:34Z·21:41:54Z (UTC). */}
              <h3>사례 1 · 반복 빈칸의 규칙과 색상 구분</h3>
              <p><strong>의도·요청</strong> · 기획 대사를 직접 완성하도록 정답 문장과 ‘적 → 라운드 → 차별점’의 입력 순서를 정했습니다. 반복되는 ‘라운드’는 한 번의 선택으로 채우도록 <q>색이 같은 빈칸일 경우 단어를 넣으면 같은 색의 뒤에 있는 빈칸도 같이 채워짐</q>이라고 요청했습니다.</p>
              <p><strong>검토·재지시</strong> · 다른 미니게임과 UI를 통일한 뒤 <q>적 단어가 들어갈 빈칸과 차별점이 들어갈 빈칸의 색이 같아서 혼동스러워. 색을 달리해줘.</q>라고 지적했습니다. 이어 이 문제를 공통 디자인 프롬프트에도 반영하도록 요청했습니다.</p>
              <p><strong>AI 작업·결과</strong> · Codex가 빈칸별 선택 단계 연결과 색상 수정을 수행했습니다. 최종 구현에서는 ‘라운드’ 두 칸이 함께 채워지고, 세 역할에 서로 다른 색을 사용합니다. 역할별 색 구분과 실제 렌더 화면 확인 규칙은 Codex가 공통 프롬프트에 정리했습니다.</p>
              <ProjectCapture file="word-current.jpg" alt="문장 빈칸과 제한시간이 표시된 단어 선택 미니게임" caption="문장 만들기 · 빈칸 순서에 맞는 단어를 골라 게임 기획을 설명합니다." />
              <p className="dc-source">구현 근거: <a href={commit('a5a9596')} target="_blank" rel="noopener noreferrer">문장 만들기 미니게임 수정</a> · <a href={source(`${runtime}WordSentenceClickGame.cs`)} target="_blank" rel="noopener noreferrer">최종 빈칸 연결·색상 구현</a></p>

              <p>미니게임7의 디자인을 다른 미니게임에도 적용하도록 요청해, Codex가 공통 디자인 프롬프트를 작성했습니다. 색상 혼동에 대한 제 피드백으로 구분·검증 규칙을 보완했으며, 아래는 미니게임3에 실제 전달한 적용본입니다.</p>
              <details className="dc-code">
                <summary>공통 디자인 프롬프트 보기 <span>Codex 작성·보완 · 미니게임3 적용본 원문</span></summary>
                <div className="dc-code-content">
                  <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}><code>{designPrompt.text}</code></pre>
                </div>
              </details>

              {/* 요청 근거: 019f983e 2026-07-25T11:14:21Z·11:22:53Z·11:25:49Z·11:59:09Z (UTC). */}
              <h3>사례 2 · 발표 카드의 안내와 그림 방향 수정</h3>
              <p><strong>의도·요청</strong> · 앞선 기획 대화를 떠올리며 ‘게임 소개·핵심 시스템·플레이 영상’을 맞추는 화면을 원했습니다. 구현 결과에서 색이 너무 진하고 안내 문구가 잘 보이지 않는 점을 지적하고, <q>게임 시작 전에 3초 동안 게임 설명 UI로 띄우고</q> 사라지도록 요청했습니다.</p>
              <p><strong>검토·재지시</strong> · 내용과 맞지 않는 도형 그림은 삭제하도록 하고, 카드 한 장의 시안을 먼저 검토했습니다. 사실적인 시안에서 2D 방향으로 조정한 뒤 <q>이번엔 도트풍으로도 해볼래?</q>라고 요청하고, 도트 시안을 선택했습니다. 안내에는 가로 슬라이드와 대화를 떠올리라는 Tip도 지정했습니다.</p>
              <p><strong>AI 작업·결과</strong> · AI가 카드 시안을 제작하고, Codex가 선택한 그림과 안내 배너를 Unity에 적용했습니다. 최종 구현은 안내가 사라진 뒤 입력과 타이머를 켜도록 구성되어 있습니다.</p>
              <ProjectCapture file="cards-current.jpg" alt="게임 소개·핵심 시스템·플레이 영상 카드를 고르는 발표 미니게임" caption="발표 구성 · 앞선 대화를 떠올리며 세 열의 카드를 맞춥니다." />

              <h3>AI를 활용한 작업</h3>
              <dl className="dc-contributions">
                <div><dt>OpenAI Codex</dt><dd>제가 규칙·디자인 방향과 수정 기준을 정하고 결과를 검토했습니다. Codex는 코드 작성·오류 분석·수정과 공통 디자인 프롬프트 정리를 수행했습니다.</dd></div>
                <div><dt>Suno AI</dt><dd>제가 가사 없는 러블리한 타이틀 BGM을 요청하고, 너무 잔잔한 결과에 분위기 조정을 지시했습니다. Codex가 Suno용 한·영 프롬프트를 작성했고, Suno AI로 제작한 BGM을 게임에 적용했습니다.</dd></div>
              </dl>
              <p className="dc-source">관련 소스: <a href={source('WordSentenceClickPrototype/Resources/WordSentenceClickPrototype/WordSentenceClickConfig.json')} target="_blank" rel="noopener noreferrer">문장·제한시간 설정</a> · <a href={source('CardPresentationMiniGame/Runtime/CardPresentationMiniGameUi.cs')} target="_blank" rel="noopener noreferrer">공통 UI 표현</a> · <a href={commit('81fc28b')} target="_blank" rel="noopener noreferrer">타이틀 BGM 적용 이력</a></p>
            </section>

            <section id="results" className="dc-section">
              <h2>결과 화면·음성</h2>
              <p>타이틀에서 시작해 진행한 PC 실행본의 실사 영상 플레이 화면과 음성·BGM입니다.</p>
              <ProjectCapture file="story-current.jpg" alt="등장인물과 자막이 표시된 실사 영상 플레이 화면" caption="실사 영상 · 게임잼에서 만난 인물들의 대화를 따라 스토리가 진행됩니다." />
              <h3>실사 영상의 음성과 게임 BGM</h3>
              <AudioSample file="prologue-dialogue.mp3" title="프롤로그 · 실사 영상 음성" description="팀이 촬영한 프롤로그 영상의 원음 중 30초 발췌입니다." />
              <AudioSample file="title-bgm.mp3" title="타이틀 BGM" description="Suno AI를 활용해 제작하고 타이틀에 적용한 음악입니다." />
              <AudioSample file="minigame-bgm.mp3" title="미니게임 BGM" description="미니게임 시작과 종료에 맞춰 재생·정지하는 음악입니다." />
            </section>

            <section id="fixes" className="dc-section">
              <h2>문제 발견과 재지시</h2>
              {/* 요청 근거: 019f9b9c 2026-07-26T01:05:25Z·01:16:57Z. 원인 분석은 Codex 응답 및 최종 소스로 확인. */}
              <h3>사례 3 · ESC 메뉴가 보이지 않는 문제 재보고</h3>
              <p><strong>의도·요청</strong> · 미니게임 중에도 설정과 이동 메뉴를 쓸 수 있도록 <q>미니게임할 때에도 ESC키 눌러서 조작 가능하게 해줘.</q>라고 요청했습니다. 흐름도에서 완료한 미니게임에 다시 진입할 때의 오류도 함께 보고했습니다.</p>
              <p><strong>검토·재지시</strong> · 첫 수정 뒤에도 <q>ESC 키를 누르면 타이머가 일시정지되지만 ESC UI가 뜨지 않아.</q>라고 재보고했습니다. 테스트용 복귀 로직의 영향일 수 있다는 제 추측과 달리, Codex는 메뉴가 미니게임 Canvas 뒤에 가려진 것을 원인으로 분석했습니다.</p>
              <p><strong>AI 작업·결과</strong> · Codex가 ESC 메뉴를 더 높은 순서의 독립 Canvas로 수정하고, 요청한 테스트 진입 기능도 제거했습니다. 최종 소스에서는 메뉴 표시와 타이머·입력·BGM의 일시정지를 연결하고, 닫으면 재개하도록 처리합니다.</p>

              <p>같이 보고한 재진입 오류에 대해서는 Codex가 완료 상태를 해제하고 이전 호감도 변화량을 되돌리도록 수정했습니다. 재플레이 문제를 발견한 것은 제 역할이며, 변화량을 저장·복원하는 해결 방식은 Codex가 구현했습니다.</p>
              <p className="dc-source">수정 이력: <a href={commit('3b7a347')} target="_blank" rel="noopener noreferrer">미니게임 ESC 메뉴와 플로우차트 진행도 개선</a></p>
            </section>
          </article>
        </div>
        <footer className="dc-footer"><Link className="btn" href="/#ai-projects">← 프로젝트 목록으로</Link><a href={repository} target="_blank" rel="noopener noreferrer">GitHub 저장소</a></footer>
      </div>
    </main>
  );
}
