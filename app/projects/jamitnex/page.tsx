import Link from 'next/link';
import ImageLightbox from '@/components/ImageLightbox';
import ProjectVideoPreview from '@/components/ProjectVideoPreview';
import { Github, Play, Download } from 'lucide-react';

const repository = 'https://github.com/Bazzi4263/MyFirst3D';
const revision = 'e4475b8';
const source = (path: string) => `${repository}/blob/${revision}/Assets/${path}`;
const runtime = 'WordSentenceClickPrototype/Runtime/';
const commit = (id: string) => `${repository}/commit/${id}`;
const assets = '/projects/jamitnex';

export const metadata = {
  title: '재밌넥이라도 사랑은 하고 싶어 | 서가은 포트폴리오',
  description: '실사 영상형 연애 시뮬레이션. 메인 기획·시나리오, 미니게임·UI 제작, Codex와 Suno AI 활용 및 플레이 테스트와 수정 경험을 소개합니다.',
  openGraph: {
    title: '재밌넥이라도 사랑은 하고 싶어 | 서가은 포트폴리오',
    description: '게임잼에서 시작된 설렘을 영상과 미니게임으로 풀어낸 4인 프로젝트입니다.',
    url: 'https://seogaeun.com/projects/jamitnex',
    images: [{ url: `${assets}/title-current.jpg`, width: 1536, height: 864, alt: '재밌넥이라도 사랑은 하고 싶어 타이틀 화면' }],
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

function CodeSample({ file, path, children }: { file: string; path: string; children: string }) {
  return (
    <details className="dc-code">
      <summary>핵심 코드 보기 <span>{file}</span></summary>
      <div className="dc-code-content">
        <a href={source(path)} target="_blank" rel="noopener noreferrer">GitHub에서 원본 보기</a>
        <pre><code>{children}</code></pre>
      </div>
    </details>
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
            <p className="dc-lead"><strong>게임잼에서 함께 게임을 만들며 설렘을 느끼는 실사 영상형 연애 시뮬레이션입니다.</strong> 소심한 주인공 현빈의 선택과 미니게임 결과에 따라 인물의 반응과 이야기가 달라집니다.</p>
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
          <ProjectVideoPreview image={`${assets}/title-current.jpg`} alt="시작하기·흐름도·환경설정 메뉴가 있는 게임 타이틀 화면" videoId="H6Mu9AAfaFk" title="재밌넥이라도 사랑은 하고 싶어" />
        </div>

        <div className="dc-body">
          <nav className="dc-toc" aria-label="상세 페이지 목차">
            <a href="#intro">게임 소개</a><a href="#contribution">담당 작업</a><a href="#implementation">핵심 구현과 선택 이유</a><a href="#results">결과 화면·음성</a><a href="#fixes">문제와 수정 경험</a>
          </nav>
          <article className="dc-article" aria-label="재밌넥이라도 사랑은 하고 싶어 프로젝트 상세">
            <section id="contribution" className="dc-section">
              <h2>담당 작업</h2>
              <p className="dc-takeaway">메인 기획과 시나리오를 바탕으로, 이야기 속 행동을 미니게임과 UI로 만들고 플레이 테스트와 수정을 맡았습니다.</p>
              <dl className="dc-contributions">
                <div><dt>기획·시나리오</dt><dd>메인 기획과 시나리오 작성</dd></div>
                <div><dt>디자인·개발</dt><dd>게임 화면·미니게임·UI 디자인, 미니게임 구현 및 UI 구조 통합</dd></div>
                <div><dt>AI 활용 개발·QA</dt><dd>OpenAI Codex를 활용한 개발, 게임 플레이 테스트와 버그 발견·수정</dd></div>
                <div><dt>영상·음악</dt><dd>실사 영상 연기, Suno AI를 활용한 BGM 제작</dd></div>
              </dl>
              <h3>프로젝트 전체 구현과의 구분</h3>
              <p>팀이 함께 만든 게임에는 실사 영상 분기, 호감도, 흐름도, 채팅, STT·LLM을 사용하는 입력·판정 기능이 들어 있습니다. 제 기여는 <strong>기획·시나리오, 미니게임·UI, 실사 연기·BGM, 플레이 테스트와 수정</strong>이며, 아래에서는 이 범위와 연결되는 구현 및 수정 이력을 소개합니다.</p>
              <p className="dc-source">담당 범위: <a href="https://seogaeun.com/#ai-projects" target="_blank" rel="noopener noreferrer">기존 포트폴리오</a> · 구현 이력: <a href={commit('50eb976')} target="_blank" rel="noopener noreferrer">미니게임 UI 디자인 및 구조 통합</a></p>
            </section>

            <section id="implementation" className="dc-section">
              <h2>핵심 구현과 선택 이유</h2>
              <h3>문장 만들기 · 이야기를 직접 완성하는 조작</h3>
              <p>게임 기획을 이야기하는 장면에서 <strong>‘적 → 라운드 → 차별점’ 순서로 단어를 골라 문장을 완성</strong>합니다. 완성할 문장 안에 빈칸을 배치하고, 같은 색의 빈칸은 같은 선택 단계에 연결했습니다. ‘라운드’를 한 번 고르면 문장 속 두 위치가 함께 채워져, 문장의 반복 표현과 실제 입력 횟수가 어긋나지 않게 했습니다.</p>
              <p>정답은 JSON으로 분리하고, 현재까지 선택한 단어가 정답의 앞부분과 일치하는지 검사합니다. 마지막에만 채점하는 대신 틀린 선택 즉시 목숨과 피드백을 갱신해, 플레이어가 현재 선택을 바로 이해할 수 있도록 구성했습니다.</p>
              <CodeSample file="WordSentenceClickGame.cs · 다음 단어 판정" path={`${runtime}WordSentenceClickGame.cs`}>{`private bool IsValidNextWord(string word)
{
    var words = new List<string>(_selectedWords) { word };
    var sentence = WordSentenceClickRound.NormalizeSentence(string.Join(" ", words));
    for (var i = 0; i < _answers.Count; i++)
    {
        if (_answers[i] == sentence ||
            _answers[i].StartsWith(sentence + " ", StringComparison.Ordinal))
        {
            return true;
        }
    }
    return false;
}`}</CodeSample>

              <h3>발표 카드 · 앞선 대화를 기억하는 미니게임</h3>
              <p>‘게임 소개·핵심 시스템·플레이 영상’ 세 열에서 카드를 바꿔 발표 내용을 맞춥니다. 앞서 나눈 게임 기획 대화를 카드 선택으로 다시 사용해, 스토리와 미니게임의 맥락을 연결했습니다. 도트 카드와 분홍색·아이보리 UI를 사용하고, 다른 미니게임에도 같은 색상과 안내·결과 표현을 적용했습니다.</p>
              <p>규칙을 읽는 동안 제한시간을 소모하지 않도록 안내 배너가 사라진 뒤 입력과 타이머를 켭니다. 안내 연출과 실제 플레이의 시작을 분리한 선택입니다.</p>
              <CodeSample file="CardPresentationMiniGame.cs · 안내 종료 후 시작 부분 발췌" path="CardPresentationMiniGame/Runtime/CardPresentationMiniGame.cs">{`_instructionOverlay.SetActive(false);
_instructionGroup.blocksRaycasts = false;
_introRoutine = null;
_feedbackText.text = "세 장의 맥락이 자연스럽게 이어지도록 맞춰보세요";
SetControlsInteractable(true);
_running = true;`}</CodeSample>

              <h3>AI를 활용한 작업</h3>
              <dl className="dc-contributions">
                <div><dt>OpenAI Codex</dt><dd>미니게임을 포함한 게임 개발·수정에 활용했습니다. 기획·UI 디자인과 구현 결과의 플레이 테스트·버그 수정은 제 담당 작업으로 진행했습니다.</dd></div>
                <div><dt>Suno AI</dt><dd>게임에 사용할 BGM 제작에 활용했습니다. 타이틀과 미니게임용 음악을 게임에 연결하고, 각 장면에 맞춰 재생·정지 및 음량을 조정했습니다.</dd></div>
              </dl>
              <p className="dc-source">관련 소스: <a href={source('WordSentenceClickPrototype/Resources/WordSentenceClickPrototype/WordSentenceClickConfig.json')} target="_blank" rel="noopener noreferrer">문장·제한시간 설정</a> · <a href={source('CardPresentationMiniGame/Runtime/CardPresentationMiniGameUi.cs')} target="_blank" rel="noopener noreferrer">공통 UI 표현</a> · <a href={commit('81fc28b')} target="_blank" rel="noopener noreferrer">타이틀 BGM 적용 이력</a></p>
            </section>

            <section id="results" className="dc-section">
              <h2>결과 화면·음성</h2>
              <p>타이틀에서 시작해 진행한 PC 실행본의 플레이 화면입니다. 실사 영상, 문장 만들기, 발표 카드가 각각 다른 방식으로 이야기에 참여하도록 구성되어 있습니다.</p>
              <ProjectCapture file="story-current.jpg" alt="등장인물과 자막이 표시된 실사 영상 플레이 화면" caption="실사 영상 · 게임잼에서 만난 인물들의 대화를 따라 이야기가 진행됩니다." />
              <div className="dc-capture-grid">
                <ProjectCapture file="word-current.jpg" alt="문장 빈칸과 제한시간이 표시된 단어 선택 미니게임" caption="문장 만들기 · 빈칸 순서에 맞는 단어를 골라 게임 기획을 설명합니다." />
                <ProjectCapture file="cards-current.jpg" alt="게임 소개·핵심 시스템·플레이 영상 카드를 고르는 발표 미니게임" caption="발표 구성 · 앞선 대화를 떠올리며 세 열의 카드를 맞춥니다." />
              </div>
              <h3>실사 영상의 음성과 게임 BGM</h3>
              <AudioSample file="prologue-dialogue.mp3" title="프롤로그 · 실사 영상 음성" description="팀이 촬영한 프롤로그 영상의 원음 중 30초 발췌입니다." />
              <AudioSample file="title-bgm.mp3" title="타이틀 BGM" description="Suno AI를 활용해 제작하고 타이틀에 적용한 음악입니다." />
              <AudioSample file="minigame-bgm.mp3" title="미니게임 BGM" description="미니게임 시작과 종료에 맞춰 재생·정지하는 음악입니다." />
            </section>

            <section id="fixes" className="dc-section">
              <h2>실제 문제와 수정 경험</h2>
              <h3>문장에 같은 단어가 두 번 나오는 경우</h3>
              <p>완성 문장에는 ‘라운드’가 두 번 등장하지만 선택 단계는 세 번입니다. 단순히 선택 단어를 이어 붙이는 표시 방식으로는 문장 안의 위치와 반복 관계를 보여주기 어려웠습니다. 빈칸마다 <strong>선택 단계 인덱스</strong>를 부여하고 두 ‘라운드’ 빈칸에 같은 인덱스를 사용하도록 수정해, 한 번의 선택으로 두 위치가 함께 갱신되게 했습니다.</p>
              <CodeSample file="WordSentenceClickGame.cs · 빈칸 갱신" path={`${runtime}WordSentenceClickGame.cs`}>{`private void UpdateSentenceBlanks()
{
    foreach (var blank in _sentenceBlanks)
    {
        if (blank.Label != null)
        {
            blank.Label.text = blank.StepIndex < _selectedWords.Count
                ? _selectedWords[blank.StepIndex]
                : "_____";
        }
    }
}`}</CodeSample>
              <p className="dc-source">수정 이력: <a href={commit('a5a9596')} target="_blank" rel="noopener noreferrer">문장 만들기 미니게임 수정</a></p>

              <h3>미니게임 중 ESC 메뉴와 일시정지 처리</h3>
              <p>스토리에서 실행한 미니게임은 기존 ESC 처리에서 메뉴로 돌아갈 경로가 없었습니다. ESC 입력을 일시정지 메뉴로 연결하고, 공통 일시정지 상태를 각 미니게임에서 확인하도록 수정했습니다. 메뉴가 열려 있는 동안 타이머·입력 처리를 멈추고, 재생 중이던 BGM은 메뉴를 닫을 때 이어 재생합니다. 타이틀·흐름도로 돌아가는 경로도 메뉴에 통합했습니다.</p>
              <CodeSample file="CardPresentationMiniGame.cs · Update 앞부분 발췌" path="CardPresentationMiniGame/Runtime/CardPresentationMiniGame.cs">{`if (WordSentenceClickBootstrap.IsMiniGamePaused || !_running || _mistakeVideoPlaying)
{
    return;
}

_remainingTime = Mathf.Max(0f, _remainingTime - Time.unscaledDeltaTime);
UpdateTimer();`}</CodeSample>

              <h3>흐름도로 미니게임을 다시 열 때의 호감도 처리</h3>
              <p>같은 장면을 다시 플레이하면 이전 결과의 호감도 변화가 남은 채 새 결과가 반영될 수 있습니다. 장면별로 적용한 호감도 변화량을 저장하고, 흐름도에서 해당 미니게임을 다시 열 때 이전 변화량을 되돌린 뒤 완료 상태를 해제하도록 수정했습니다.</p>
              <CodeSample file="VisualNovelRouteGame.cs · 재진입 처리 부분 발췌" path={`${runtime}VisualNovelRouteGame.cs`}>{`if (HasMiniGameSlot(scene))
{
    _completedMiniGameSceneIds.Remove(scene.id);
    if (_miniGameAffectionDeltasBySceneId.TryGetValue(scene.id, out var previousDelta))
    {
        ApplyAffection(-previousDelta.x, -previousDelta.y);
        _miniGameAffectionDeltasBySceneId.Remove(scene.id);
    }
}`}</CodeSample>
              <p className="dc-source">수정 이력: <a href={commit('3b7a347')} target="_blank" rel="noopener noreferrer">미니게임 ESC 메뉴와 플로우차트 진행도 개선</a></p>
            </section>
          </article>
        </div>
        <footer className="dc-footer"><Link className="btn" href="/#ai-projects">← 프로젝트 목록으로</Link><a href={repository} target="_blank" rel="noopener noreferrer">GitHub 저장소</a></footer>
      </div>
    </main>
  );
}
