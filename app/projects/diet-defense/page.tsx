import Link from 'next/link';
import { Download, FileText, Play } from 'lucide-react';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Diet Defense | 서가은 포트폴리오',
  description: '체중과 의지력을 관리하는 Direct2D 타워 디펜스. AI를 활용한 1인 제작과 배치·웨이브 구현, UI·밸런스 개선 경험을 소개합니다.',
};

const assets = '/projects/diet-defense';

function Capture({ file, caption }: { file: string; caption: string }) {
  return <figure className="dc-figure">
    <a href={`${assets}/${file}.png`} target="_blank" rel="noopener noreferrer" aria-label={`${caption} — 원본 이미지 보기`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${assets}/${file}.png`} alt={caption} loading="lazy" />
    </a><figcaption>{caption}</figcaption>
  </figure>;
}

function Code({ label, children }: { label: string; children: string }) {
  return <details className="dc-code"><summary>핵심 코드 보기<span>src/main.cpp · {label}</span></summary>
    <div className="dc-code-content"><pre><code>{children}</code></pre></div>
  </details>;
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
        <p className="dc-lead"><strong>체력이 줄어드는 대신 체중이 늘어나는 2D 타워 디펜스 게임입니다.</strong> 음식 몬스터를 막으며 47kg 코어를 지키고, 의지력을 타워·강화·스킬에 배분합니다. 체중이 60kg을 초과하면 패배합니다.</p>
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="dc-cover" src={`${assets}/title-current.png`} alt="실행 중인 Diet Defense의 타이틀 화면" />
    </div>
    <div className="dc-body">
      <nav className="dc-toc" aria-label="상세 페이지 목차">
        <a href="#introduction">게임 소개</a><a href="#contribution">담당 작업</a><a href="#implementation">핵심 구현과 선택 이유</a><a href="#results">결과 화면·사운드</a><a href="#improvements">실제 문제와 수정 경험</a>
      </nav>
      <article className="dc-article" aria-label="Diet Defense 제작 경험">
        <Section id="contribution" title="담당 작업">
          <p className="dc-takeaway">컨셉과 제작 방향을 정하고, AI가 만든 코드·이미지·음악을 검토하며 하나의 게임으로 구성했습니다.</p>
          <dl className="dc-contributions">
            <div><dt>기획·판단</dt><dd>다이어트 디펜스 컨셉과 디자인 방향을 정하고, 기획서를 검토·수정했습니다. 플레이 화면을 보며 필요한 기능과 수정 사항을 정리했습니다.</dd></div>
            <div><dt>개발·적용</dt><dd>Codex를 활용해 Direct2D 게임 코드, 타워·몬스터·스킬·선택 이벤트를 구현하고 이미지 적용, UI 수정, 빌드 확인과 밸런스 조정을 진행했습니다.</dd></div>
            <div><dt>시각·오디오</dt><dd>ChatGPT로 만든 이미지를 선택·적용하고, 축소 과정에서 어색해진 도트는 그림판과 1px 브러시로 직접 보정했습니다. Suno AI로 제작한 BGM을 게임에 적용했습니다.</dd></div>
          </dl>
          <h3>게임 전체에 구현된 범위</h3>
          <p>3개 스테이지에 각각 6개 웨이브가 있으며, 난이도 3종, 타워 8종, 액티브 스킬 3종, 식단 선택 이벤트와 플레이 기록 저장이 연결됩니다. 아래 코드는 프로젝트에 구현된 동작의 발췌이며, 코드 전체를 직접 수작업으로 작성했다는 의미는 아닙니다.</p>
          <h3>AI를 어떤 작업에 사용했는가</h3>
          <dl className="dc-contributions">
            <div><dt>ChatGPT</dt><dd>컨셉·기획 문장을 보완하고 타이틀, 음식 몬스터, 버튼 UI, 클리어 화면 이미지를 제작했습니다. 결과물의 스타일과 화면 적용 상태를 확인하며 골랐습니다.</dd></div>
            <div><dt>Codex</dt><dd>기획서를 기준으로 게임 코드를 작성·수정하고, 시스템 추가와 에셋 적용, UI 배치, 빌드 확인에 활용했습니다. 생성 결과를 플레이 화면과 대조하며 수정할 부분을 반영했습니다.</dd></div>
            <div><dt>Suno AI</dt><dd>ChatGPT로 작성한 영어 프롬프트를 바탕으로 게임 분위기에 맞는 BGM을 제작했습니다. 효과음은 별도의 파형 생성 스크립트로 구성되어 있습니다.</dd></div>
          </dl>
        </Section>
        <Section id="implementation" title="핵심 구현과 선택 이유">
          <h3>1. 익숙한 Direct2D로 제작 범위를 정하기</h3>
          <p>초기에는 Unity로 대학생활 주제의 게임을 구상했지만, 도구 학습과 제작 시간이 예상보다 길어졌습니다. 제한된 시간에 완성 가능한 범위를 잡기 위해 익숙한 Direct2D로 전환하고, 음식 몬스터와 타워 배치 중심의 게임으로 방향을 정했습니다.</p>
          <h3>2. 타워의 점유 칸 전체를 검사하는 배치</h3>
          <p>길목 이동과 타워 설치 공간을 분리했습니다. 1×1·2×2 타워의 모든 점유 칸에서 경로·장애물·기존 타워와의 겹침을 검사하고, 길목 근처일 때만 설치합니다. 큰 타워도 일부 칸이 길이나 맵 경계를 침범하지 않도록 하는 구조입니다. 설치 미리보기와 실제 배치가 같은 검증 함수를 사용합니다.</p>
          <Code label="GetPlacementFor · 점유 칸 검사 발췌">{`for (int y = gridY; y < gridY + footprint; ++y)
{
    for (int x = gridX; x < gridX + footprint; ++x)
    {
        if (pathCells_[y][x] || IsBlockedTerrainCell(x, y) || IsOccupiedCell(x, y))
        {
            return false;
        }
        nearPath = nearPath || IsNearPathCell(x, y);
    }
}
if (!nearPath)
{
    return false;
}`}</Code>
          <h3>3. 체중과 의지력 사이에서 선택하기</h3>
          <p>적을 막지 못하면 체중이 늘고, 처치하면 의지력을 얻습니다. 의지력은 설치·강화·스킬 구매에 공통으로 사용합니다. 웨이브 사이 식단 이벤트에서는 체중을 줄이는 대신 의지력을 쓰거나, 체중 증가를 감수하고 의지력을 회복하는 선택을 둬 전투 사이에도 자원 판단이 이어지도록 했습니다.</p>
          <Code label="Update · 패배와 웨이브 종료 판정 발췌">{`if (weight_ > 60.0f)
{
    phase_ = Phase::GameOver;
    message_ = L"체중이 60kg을 넘어버렸습니다";
    messageTimer_ = 3.0f;
    SaveGameResult(false);
    PlaySfx(L"game_over");
}
else if (spawnIndex_ >= static_cast<int>(waves_[waveIndex_].queue.size()) && !HasActiveEnemies())
{
    ClearWave();
}`}</Code>
          <h3>4. 새 경로에서 다시 배치하는 스테이지 전환</h3>
          <p>각 스테이지의 마지막 웨이브를 마치면 다음 스테이지로 넘어갑니다. 타워·적·투사체를 비우고 자원과 스킬 상태를 초기화한 뒤 경로를 다시 구성합니다. 이전 배치를 그대로 유지하는 대신 새 맵에 맞춰 방어선을 다시 선택하게 됩니다.</p>
        </Section>
        <Section id="results" title="결과 화면·사운드">
          <p>현재 Release 실행 파일을 타이틀부터 실행하고, 쉬움 난이도의 Stage 1에서 직접 플레이한 화면입니다.</p>
          <Capture file="tower-management" caption="타워 배치와 강화 · 의지력을 사용해 홈트 타워를 Lv.2로 강화한 Stage 1 화면" />
          <Capture file="wave-current" caption="Stage 1 두 번째 웨이브 전투 · 길목을 따라오는 음식 몬스터를 배치한 타워로 방어" />
          <Capture file="event-current" caption="웨이브 종료 후 식단 이벤트 · 체중과 의지력의 변화를 비교해 다음 행동 선택" />
          <figure className="dc-voice-sample"><figcaption>Snack Siege Shuffle · 게임 BGM<span>Suno AI로 제작해 게임에 적용한 배경음악입니다. 대사 음성이 아닌 음악 샘플입니다.</span></figcaption>
            <audio controls preload="none" aria-label="Diet Defense 배경음악 듣기"><source src={`${assets}/snack-siege-shuffle.mp3`} type="audio/mpeg" />브라우저가 오디오 재생을 지원하지 않습니다.</audio>
          </figure>
          <figure className="dc-voice-sample"><figcaption>타워 강화 효과음<span>파형 생성 스크립트로 만든 게임 내 효과음입니다.</span></figcaption>
            <audio controls preload="none" aria-label="타워 강화 효과음 듣기"><source src={`${assets}/upgrade.wav`} type="audio/wav" />브라우저가 오디오 재생을 지원하지 않습니다.</audio>
          </figure>
        </Section>
        <Section id="improvements" title="실제 문제와 수정 경험">
          <h3>AI 캐릭터 이미지가 연속 동작처럼 보이지 않음</h3>
          <p>사람 캐릭터를 여러 장 생성했을 때 머리 길이·자세·비율이 달라 애니메이션의 통일성을 맞추기 어려웠습니다. 직접 도트를 수정하는 데도 시간이 많이 들어, 단일 이미지로 특징을 전달하기 쉬운 음식 몬스터와 타워 중심으로 컨셉을 조정했습니다.</p>
          <h3>이미지 품질과 축소 후 도트 손상</h3>
          <p>Codex로 바로 생성한 이미지의 품질과 스타일이 맞지 않아, 이미지 제작은 ChatGPT에서 진행하고 Codex로 게임에 적용하는 방식으로 나눴습니다. 축소하며 어색해진 부분은 그림판에서 크기를 조정한 뒤 1px 브러시로 직접 다듬었습니다.</p>
          <h3>UI 글자 넘침과 맵 가림</h3>
          <p>초기에는 글자가 박스를 벗어나거나 UI가 맵 안쪽으로 튀어나왔습니다. 텍스트 영역과 버튼 크기를 조정하고, 선택 이벤트와 타워 강화·판매 정보를 별도 패널로 분리했습니다. 현재 소스에서는 한 줄 정보의 줄바꿈을 제어하며, 설치 실패 이유도 별도로 표시합니다.</p>
          <Code label="DrawSingleLineTextAt · 줄바꿈 상태 보존 발췌">{`const DWRITE_WORD_WRAPPING oldWrapping = format->GetWordWrapping();
format->SetWordWrapping(DWRITE_WORD_WRAPPING_NO_WRAP);
DrawTextAt(text, rect, format, color);
format->SetWordWrapping(oldWrapping);`}</Code>
          <h3>처치 보상이 쌓여 이벤트 선택의 의미가 약해짐</h3>
          <p>후반에 의지력이 많이 남는 문제를 확인하고, 선택지 보상은 유지하며 몬스터 처치 보상을 낮추는 방향으로 조정했습니다. 현재 소스에도 난이도별 처치 보상 배율이 분리되어 있습니다. 수치화된 플레이 성과 대신, 자원 사용과 이벤트 선택을 다시 고민하게 하는 조정 방향을 보여줍니다.</p>
          <p className="dc-source">제작 경험은 기존 작업물 리포트, 구현 설명과 코드는 현재 프로젝트의 README·기획서·src/main.cpp 및 에셋 생성 스크립트를 기준으로 정리했습니다. <a href={`${assets}/diet_defense_work_report.pdf`} target="_blank" rel="noopener noreferrer">기존 작업물 리포트 보기</a></p>
        </Section>
      </article>
    </div>
    <footer className="dc-footer"><Link href="/#ai-projects">← 프로젝트 목록으로</Link></footer>
  </div></main>;
}
