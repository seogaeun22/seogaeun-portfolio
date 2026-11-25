import Link from 'next/link';
import ImageLightbox from '@/components/ImageLightbox';
import ProjectVideoPreview from '@/components/ProjectVideoPreview';
import { Download, FileText, Play } from 'lucide-react';
import type { ReactNode } from 'react';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const metadata = {
  title: 'Diet Defense | 서가은 포트폴리오',
  description: '체중과 의지력을 관리하는 Direct2D 타워 디펜스. 실제 제작 대화를 바탕으로 요구 조건을 구체화하고 AI 구현 결과를 검토·수정한 과정을 소개합니다.',
};

const assets = '/projects/diet-defense';
const plan = readFileSync(path.join(process.cwd(), 'data/diet-defense-plan.md'), 'utf8');

function Capture({ file, caption }: { file: string; caption: string }) {
  return <figure className="dc-figure">
    <ImageLightbox src={`${assets}/${file}.png`} alt={caption}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${assets}/${file}.png`} alt={caption} loading="lazy" />
    </ImageLightbox><figcaption>{caption}</figcaption>
  </figure>;
}


function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="dc-section"><h2>{title}</h2>{children}</section>;
}

export default function DietDefensePage() {
  return <main className="dc-page"><div className="container">
    <header className="dc-topbar"><Link href="/#ai-projects">← 프로젝트 목록으로</Link><span>서가은 · 포트폴리오</span></header>
    <div id="introduction" className="dc-overview">
      <header className="dc-header">
        <h1>Diet Defense</h1>
        <p className="dc-lead"><strong>체력이 줄어드는 대신 체중이 늘어나는 2D 타워 디펜스 게임입니다.</strong> 음식 몬스터를 막으며 47kg 코어를 지키고, 의지력을 타워·강화·스킬에 배분합니다. 체중이 60kg을 초과하면 패배합니다. Codex에 규칙과 화면 조건을 전달하고, 적용 결과에서 발견한 겹침·반복·과한 움직임을 구체적으로 재지시했습니다.</p>
        <dl className="dc-facts">
          <div><dt>개발 기간</dt><dd>2026.07.03 ~ 2026.07.05</dd></div>
          <div><dt>팀 구성</dt><dd>1인 프로젝트 · AI 도구 활용</dd></div>
          <div><dt>개발 환경</dt><dd>C++ · Win32 · Direct2D · DirectWrite</dd></div>
          <div><dt>AI 활용</dt><dd>ChatGPT · Codex · Suno AI</dd></div>
        </dl>
        <div className="dc-links">
          <a className="btn btn-primary" href={`${assets}/DietDefense_Final.zip`} download><Download size={18} />게임 다운로드</a>
          <a className="btn" href="https://youtu.be/Jr1Cg_P9-L8" target="_blank" rel="noopener noreferrer"><Play size={18} />플레이 영상</a>
          <a className="btn" href={`${assets}/diet_defense_work_report.pdf`} target="_blank" rel="noopener noreferrer"><FileText size={18} />리포트 보기</a>
        </div>
      </header>
      <ProjectVideoPreview image={`${assets}/title-current.png`} alt="실행 중인 Diet Defense의 타이틀 화면" videoId="Jr1Cg_P9-L8" title="Diet Defense" />
    </div>
    <div className="dc-body">
      <nav className="dc-toc" aria-label="상세 페이지 목차">
        <a href="#introduction">게임 소개</a><a href="#contribution">담당 작업</a><a href="#planning">기획서 작성</a><a href="#improvements">요청·검토·수정 사례</a><a href="#results">결과 화면·사운드</a>
      </nav>
      <article className="dc-article" aria-label="Diet Defense 제작 경험">
        <Section id="contribution" title="담당 작업">
          <p className="dc-takeaway">다이어트 컨셉과 플레이 조건은 제가 정하고, Codex로 코드를 구현·수정했습니다. 화면과 동작을 확인한 뒤 문제와 원하는 변경 범위를 다시 전달했습니다.</p>
          <dl className="dc-contributions">
            <div><dt>제가 정한 조건</dt><dd>Direct2D·도트 아트·음식 몬스터·47kg 코어와 60kg 초과 시 패배 조건을 전달했습니다. 화면 겹침을 지적하고, 선택지 중복 제거와 피격 움직임 보완을 요청했습니다.</dd></div>
            <div><dt>AI가 수행한 작업</dt><dd>Codex가 기획 보완과 게임 코드 작성·수정, 에셋 적용, UI 재배치와 빌드 확인을 수행했습니다. 세부 구현 결과를 확인하며 다음 수정 요청을 정했습니다.</dd></div>
            <div><dt>시각·오디오</dt><dd>ChatGPT로 만든 이미지를 선택·적용하고, 축소 과정에서 어색해진 도트는 그림판과 1px 브러시로 직접 보정했습니다. Suno AI로 제작한 BGM을 게임에 적용했습니다.</dd></div>
          </dl>
          <h3>게임 전체에 구현된 범위</h3>
          <p>3개 스테이지에 각각 6개 웨이브가 있으며, 난이도 3종, 타워 8종, 액티브 스킬 3종, 선택 이벤트와 플레이 기록 저장이 연결됩니다.</p>
          <h3>AI를 어떤 작업에 사용했는가</h3>
          <dl className="dc-contributions">
            <div><dt>ChatGPT</dt><dd>컨셉·기획 문장을 보완하고 타이틀, 음식 몬스터, 버튼 UI, 클리어 화면 이미지를 제작했습니다. 결과물의 스타일과 화면 적용 상태를 확인하며 골랐습니다.</dd></div>
            <div><dt>Codex</dt><dd>기획서를 기준으로 시스템 구현, 에셋 적용, UI 배치와 수정에 활용했습니다. 아래 사례는 제작 당시 제가 보낸 요청과 Codex의 처리 기록을 바탕으로 정리했습니다.</dd></div>
            <div><dt>Suno AI</dt><dd>ChatGPT로 작성한 영어 프롬프트를 바탕으로 게임 분위기에 맞는 BGM을 제작했습니다. 효과음은 별도의 파형 생성 스크립트로 구성되어 있습니다.</dd></div>
          </dl>
        </Section>
        <Section id="planning" title="기획서 작성">
          <h3>Codex를 이용하여 기획서.md 파일을 작성하였습니다.</h3>
          <details className="dc-code dc-plan">
            <summary>다이어트 디펜스 기획서 펼쳐 보기<span>제작 당시 기획서</span></summary>
            <div className="dc-plan-content">
              <p className="dc-source">제작 당시 기획서로, 일부 규칙·수치·조작은 최종 게임과 다를 수 있습니다.</p>
              <Markdown remarkPlugins={[remarkGfm]} components={{
                h1: ({ children }) => <h3>{children}</h3>,
                h2: ({ children }) => <h4>{children}</h4>,
                h3: ({ children }) => <h5>{children}</h5>,
                h4: ({ children }) => <h6>{children}</h6>,
                table: ({ children }) => <div className="dc-plan-table" tabIndex={0} role="region" aria-label="기획서 표"><table>{children}</table></div>,
              }}>{plan}</Markdown>
            </div>
          </details>
        </Section>
        <Section id="improvements" title="요청·검토·수정 사례">
          <p className="dc-source">인용은 제작 당시 제 요청의 짧은 발췌이며, 그 외 과정 설명은 대화와 현재 소스를 바탕으로 요약했습니다.</p>
          <h3>1. 체중계 교체에서 배치 판정·UI 수정까지</h3>
          <p>체중 변화를 이미지 안에서 읽을 수 있도록 체중계 표시창에 <strong>47.0 → 48.3처럼 현재 체중을 표시</strong>해 달라고 요청했습니다. 적용 후 이미지가 길목과 겹치고 테두리 위에 타워가 설치되는 문제를 발견했습니다.</p>
          <p><strong>실제 후속 요청 발췌:</strong> “체중계 테두리 부분에도 포탑 설치가 가능해졌어.” 이후에는 “맵의 사이즈 또는 상점 위치 등 변경해도 되니 맵과 UI를 글자가 벗어남 없이 배치하기”로 수정 범위를 넓혔습니다. Codex가 체중계 크기와 표시 위치를 조정하고 이미지 영역의 설치를 막았으며, 상단 정보·버튼·웨이브 설명 영역을 재배치했습니다.</p>
          <h3>2. 반복되는 선택지를 중복 없는 이벤트로 확장</h3>
          <p>웨이브 사이에 다양한 선택을 주고 싶어, 먼저 현재 선택지의 종류와 효과를 설명해 달라고 요청했습니다. 네 종류가 반복되는 구조를 확인한 뒤 확장을 요청했습니다.</p>
          <p><strong>실제 요청 발췌:</strong> “중복된 선택지가 안 나오도록 종류를 여러개 만들어볼래?” Codex가 효과를 포함한 15개 이벤트를 만들고 스테이지마다 5개씩 배정했습니다. 저는 전체 설명을 다시 요청해 중복 여부를 확인하고, 식단 외 행동도 포함하므로 명칭을 ‘선택 이벤트’로 바꾸도록 지시했습니다. 개별 이벤트와 수치의 구체화는 Codex가 수행했습니다.</p>
          <h3>3. 피격 반응을 추가한 뒤 과한 흔들림 줄이기</h3>
          <p>정적인 몬스터에 움직임을 주려고 “몬스터도 데미지를 받을때나 이동할 때 살짝 마이크로 애니메이션이 있으면 좋을 것 같아.”라고 요청했습니다. Codex가 이동 시 들썩임과 피격 시 흔들림·크기 변화를 추가했지만, 광역 피해를 받을 때 반응이 과해 보였습니다.</p>
          <p><strong>실제 후속 요청 발췌:</strong> “광역 데미지 입는 포탑에 데미지를 입으면 심하게 흔들리는 것 처럼 보여. 이걸 보완해줘.” Codex는 연속 피해로 피격 타이머가 반복 갱신되는 원인을 확인하고, 유산소 트랙의 피격 반응만 약하게 조정했습니다. 현재 코드에서도 일반 공격과 광역 피해의 반응 강도를 구분합니다.</p>
        </Section>
        <Section id="results" title="결과 화면·사운드">
          <p>현재 Release 실행 파일을 타이틀부터 실행하고, 쉬움 난이도의 Stage 1에서 직접 플레이한 화면입니다.</p>
          <Capture file="tower-management" caption="타워 배치와 강화 · 의지력을 사용해 홈트 타워를 Lv.2로 강화한 Stage 1 화면" />
          <Capture file="wave-current" caption="Stage 1 두 번째 웨이브 전투 · 길목을 따라오는 음식 몬스터를 배치한 타워로 방어" />
          <Capture file="boss-entrance" caption="Stage 1 네 번째 웨이브 · ‘야식 배달’ 보스 등장 시 이름과 ‘잡몹을 추가 배달합니다’ 능력 안내 표시" />
          <Capture file="event-current" caption="웨이브 종료 후 선택 이벤트 · 체중과 의지력의 변화를 비교해 다음 행동 선택" />
          <figure className="dc-voice-sample"><figcaption>Snack Siege Shuffle · 게임 BGM<span>Suno AI로 제작해 게임에 적용한 배경음악입니다. 대사 음성이 아닌 음악 샘플입니다.</span></figcaption>
            <audio controls preload="none" aria-label="Diet Defense 배경음악 듣기"><source src={`${assets}/snack-siege-shuffle.mp3`} type="audio/mpeg" />브라우저가 오디오 재생을 지원하지 않습니다.</audio>
          </figure>
          <figure className="dc-voice-sample"><figcaption>타워 강화 효과음<span>파형 생성 스크립트로 만든 게임 내 효과음입니다.</span></figcaption>
            <audio controls preload="none" aria-label="타워 강화 효과음 듣기"><source src={`${assets}/upgrade.wav`} type="audio/wav" />브라우저가 오디오 재생을 지원하지 않습니다.</audio>
          </figure>
        </Section>
      </article>
    </div>
    <footer className="dc-footer"><Link href="/#ai-projects">← 프로젝트 목록으로</Link></footer>
  </div></main>;
}
