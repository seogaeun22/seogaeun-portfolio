import Link from 'next/link';
import { Github, Play, ExternalLink } from 'lucide-react';

const repository = 'https://github.com/dionme2622/Epic_AI_MegaJam';
const source = (path: string) => `${repository}/blob/main/MegaJam/${path}`;

export const metadata = {
  title: "Dragon’s Cut | 서가은 포트폴리오",
  description: '그래픽 설정을 바꾸며 숨겨진 단서를 찾는 3D 퍼즐 어드벤처. Codex를 활용한 개발과 시네마틱·AI 보이스·모델 제작 과정을 소개합니다.',
};

function ProjectCapture({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return (
    <figure className="dc-figure">
      <a href={`/projects/dragons-cut/${file}`} target="_blank" rel="noopener noreferrer" aria-label={`${alt} — 원본 이미지 보기`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/projects/dragons-cut/${file}`} alt={alt} loading="lazy" />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function CodeSample({ file, path, children }: { file: string; path: string; children: string }) {
  return (
    <details className="dc-code">
      <summary>핵심 코드 보기 <span>{file}</span></summary>
      <div className="dc-code-content"><a href={source(path)} target="_blank" rel="noopener noreferrer">GitHub에서 원본 보기</a><pre><code>{children}</code></pre></div>
    </details>
  );
}

export default function DragonsCutPage() {
  return (
    <main className="dc-page">
      <div className="container">
        <header className="dc-topbar"><Link href="/#ai-projects">← 프로젝트 목록으로</Link><span>서가은 · 포트폴리오</span></header>
        <div className="dc-overview"><header className="dc-header">
          <h1>Dragon’s Cut</h1>
          <p className="dc-lead"><strong>그래픽 설정을 바꾸며 숨겨진 단서를 찾는 3D 퍼즐 어드벤처 게임입니다.</strong> 영화에서 편집되어 사라진 다리를 되찾기 위해, 드래곤이 촬영장 뒤편을 탐험하고 퍼즐을 해결합니다.</p>
          <dl className="dc-facts">
            <div><dt>개발 기간</dt><dd>2026.11.12 ~ 2026.11.15</dd></div>
            <div><dt>팀 구성</dt><dd>3인 프로젝트</dd></div>
            <div><dt>개발 환경</dt><dd>Unreal Engine · C++ · Sequencer</dd></div>
            <div><dt>AI 활용</dt><dd>OpenAI Codex · Inworld · Tripo</dd></div>
            <div><dt>출품</dt><dd>2026 Epic AI MegaJam</dd></div>
          </dl>
          <div className="dc-links">
            <a className="btn btn-primary" href="https://seogaeun22.itch.io/dragons-cut" target="_blank" rel="noopener noreferrer"><ExternalLink size={18} />게임 보기</a>
            <a className="btn" href="https://youtu.be/CHJFBZ8OWZ4" target="_blank" rel="noopener noreferrer"><Play size={18} />플레이 영상</a>
            <a className="btn" href={repository} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub 저장소 보기</a>
          </div>
        </header>
        <img className="dc-cover" src="/projects/dragons-cut/thumbnail.png" alt="Dragon’s Cut 게임 대표 이미지" /></div>
        <div className="dc-body">
        <nav className="dc-toc" aria-label="상세 페이지 목차">
          <a href="#contribution">담당 작업</a><a href="#dialogue">자막·음성</a><a href="#cinematic">시네마틱</a><a href="#assets">캐릭터·사운드</a><a href="#verification">적용 중 문제와 개선</a>
        </nav>
        <article className="dc-article" aria-label="Dragon’s Cut 제작 과정">
        <section id="contribution" className="dc-section">
          <h2>담당 작업</h2>
          <p className="dc-takeaway">Codex를 활용한 개발과 함께, 오프닝·엔딩 연출 및 AI 보이스·모델 제작과 게임 적용을 맡았습니다.</p>
          <dl className="dc-contributions">
            <div><dt>AI 활용 개발</dt><dd>OpenAI Codex를 활용한 게임 개발, 구현 결과의 플레이 확인과 오류 수정</dd></div>
            <div><dt>시네마틱</dt><dd>오프닝·엔딩 시퀀서 제작</dd></div>
            <div><dt>캐릭터·보이스</dt><dd>Tripo로 용사 모델 제작, Inworld로 캐릭터 대사 보이스 제작</dd></div>
            <div><dt>게임 적용</dt><dd>인게임 자막·음성 연결, WeLoveIndies 사운드 적용</dd></div>
          </dl>
        </section>

        <section id="dialogue" className="dc-section">
          <h2>자막·음성 동기화</h2>
          <p className="dc-takeaway">음성이 끝날 때까지 자막을 유지하도록, 실제 음성 길이로 표시 시간을 조정합니다.</p>
          <p>대사마다 음성 길이가 달라 자막을 고정된 시간에 지우면 긴 대사가 끝나기 전에 텍스트가 사라질 수 있습니다. 표시 시간을 <strong>기본값과 ‘음성 길이 + 0.25초’ 중 큰 값</strong>으로 정해, 긴 대사도 끝까지 읽을 수 있도록 처리합니다.</p>
          <ol className="dc-steps">
            <li><strong>대사별 음성 연결</strong><p>영문 대사에 해당하는 음성 에셋을 조회합니다.</p></li>
            <li><strong>이전 음성 정리</strong><p>새 대사를 재생하기 전에 기존 음성을 멈춰 두 음성이 겹치지 않도록 합니다.</p></li>
            <li><strong>표시 시간 조정</strong><p>재생할 음성의 길이를 읽어 자막 유지 시간을 늘립니다.</p></li>
          </ol>
          <CodeSample file="DirectorCutPlayHUD.cpp" path="Source/MegaJam/DirectorCutPlayHUD.cpp">{`if (IsValid(SubtitleVoice)) SubtitleVoice->Stop();
SubtitleVoice = nullptr;
if (const TCHAR* VoicePath = FindDirectorCutVoice(En))
{
    if (USoundBase* Sound = LoadObject<USoundBase>(nullptr, VoicePath))
    {
        Duration = FMath::Max(Duration, Sound->GetDuration() + .25f);
        SubtitleVoice = UGameplayStatics::SpawnSound2D(this, Sound);
    }
}`}</CodeSample>
          <ProjectCapture file="subtitle-lobby-route.png" alt="화자와 한국어·영어 자막을 화면 상단에 표시한 플레이 화면" caption="화자와 한국어·영어 자막을 화면 상단에 함께 표시합니다." />
          <p className="dc-source">관련 소스: <a href={source('SourceAssets/VoicePrompts/install_gameplay_voices.py')} target="_blank" rel="noopener noreferrer">음성 준비·임포트 스크립트</a> · <a href={source('Source/MegaJam/DirectorCutVoiceLookup.h')} target="_blank" rel="noopener noreferrer">대사별 음성 조회</a></p>
        </section>

        <section id="cinematic" className="dc-section">
          <h2>시네마틱과 장면 전환</h2>
          <p className="dc-takeaway">시퀀서의 타이밍에 자막을 맞추고, 재생 종료 이벤트로 다음 레벨을 연결합니다.</p>
          <h3>시퀀서 타이밍과 자막 연결</h3>
          <p>시퀀서에 맞춰 표시되는 자막을 화자·한국어·영어로 나눠 읽기 쉽게 구성했습니다. 구현에서는 자막 액터의 숨김 상태로 현재 대사를 선택하고, 기존 이미지 메시 대신 Slate UI에 출력해 시퀀서의 표시 타이밍을 유지합니다.</p>
          <CodeSample file="DirectorCutPrologueSubtitles.cpp" path="Source/MegaJam/DirectorCutPrologueSubtitles.cpp">{`ActiveCaption = INDEX_NONE;
for (int32 i = 0; i < Captions.Num(); ++i)
{
    if (Captions[i].IsValid() && !Captions[i]->IsHidden())
    {
        ActiveCaption = i;
        break;
    }
}`}</CodeSample>
          <h3>시퀀스가 끝나는 시점에 레벨 이동</h3>
          <p>SequencePlayer의 <strong>OnFinished 이벤트</strong>에 레벨 이동 함수를 연결합니다. 시퀀스 액터와 목적지 레벨이 설정되어 있을 때만 동작하며, 별도의 대기 시간 대신 실제 재생 종료 시점을 사용합니다.</p>
          <CodeSample file="DirectorCutSequenceTransition.cpp" path="Source/MegaJam/DirectorCutSequenceTransition.cpp">{`if (SequenceActor && !DestinationLevel.IsNull())
{
    if (ULevelSequencePlayer* Player = SequenceActor->GetSequencePlayer())
    {
        Player->OnFinished.AddUniqueDynamic(
            this, &ADirectorCutSequenceTransition::TravelToDestination);
    }
}

// TravelToDestination 내부
UGameplayStatics::OpenLevelBySoftObjectPtr(this, DestinationLevel);`}</CodeSample>
          <div className="dc-capture-grid">
            <ProjectCapture file="lobby-current.png" alt="게임 시작 버튼이 있는 로비 화면" caption="로비 · 게임 시작" />
            <ProjectCapture file="prologue-lobby-route.png" alt="용사와 드래곤이 대화하는 프롤로그 화면" caption="프롤로그 · 용사와 드래곤의 대화" />
          </div>
          <h3>선택에 따라 달라지는 세 가지 엔딩</h3>
          <p>최종 스테이지의 다리 회수가 끝나면 마지막 대사와 페이드 아웃을 거쳐 엔딩 맵으로 이동합니다. 엔딩에서는 원래 드래곤 다리, 수레, 용사 다리 중 하나를 선택하고 각 선택에 연결된 후속 시퀀스를 재생합니다.</p>
          <div className="dc-ending-grid">
            <div><h4>드래곤 다리</h4><p>엇박자로 걷는 드래곤과 용사의 반응을 통해 애니메이션 자체를 소재로 한 장면을 구성합니다.</p></div>
            <div><h4>수레</h4><p>경사로에서 가속하는 수레의 이동에 카메라·바퀴 회전·대사와 비명을 연결합니다.</p></div>
            <div><h4>용사 다리</h4><p>작은 기사 다리를 장착한 드래곤의 빠른 걸음과 이를 본 용사의 반응을 보여줍니다.</p></div>
          </div>
          <div className="dc-capture-grid dc-capture-grid-three">
            <ProjectCapture file="ending-dragon.png" alt="원래 드래곤 다리를 선택한 엔딩 결과 화면" caption="드래곤 다리 · 원래의 나로" />
            <ProjectCapture file="ending-cart.png" alt="수레를 선택한 엔딩 결과 화면" caption="수레 · 멈출 수 없는 감독판" />
            <ProjectCapture file="ending-knight.png" alt="용사 다리를 선택한 엔딩 결과 화면" caption="용사 다리 · 빌려온 당당함" />
          </div>
          <p className="dc-source">관련 소스: <a href={source('SourceAssets/Ending/README.md')} target="_blank" rel="noopener noreferrer">엔딩 연출·분기 문서</a> · <a href={source('Source/MegaJam/DirectorCutEnding.cpp')} target="_blank" rel="noopener noreferrer">엔딩 제어 코드</a></p>
        </section>

        <section id="assets" className="dc-section">
          <h2>AI 캐릭터·보이스 제작과 사운드 적용</h2>
          <p className="dc-takeaway">생성한 모델과 보이스를 오프닝·엔딩의 캐릭터와 대사에 적용했습니다.</p>
          <h3>Inworld · 캐릭터 대사 보이스</h3>
          <ProjectCapture file="inworld-voice.png" alt="Inworld TTS Playground에서 Hades 보이스와 감정 지시문으로 영어 대사를 생성하는 화면" caption="Hades 보이스에 차분하고 단호한 톤과 강조할 구절을 지시해 캐릭터 대사를 생성했습니다." />
          <figure className="dc-voice-sample">
            <figcaption>드래곤 · “이번 컷은 끝까지 찍어.”<span lang="en">Keep the camera rolling to the end of this take.</span></figcaption>
            <audio controls preload="metadata" aria-label="Inworld로 제작한 드래곤의 마지막 대사 듣기">
              <source src="/projects/dragons-cut/inworld-final-take.mp3" type="audio/mpeg" />
              <a href="/projects/dragons-cut/inworld-final-take.mp3">음성 파일 듣기</a>
            </audio>
          </figure>
          <h3>Tripo · 용사 3D 모델</h3>
          <ProjectCapture file="tripo-knight.png" alt="Tripo에서 생성한 베이지색 갑옷과 보라색 의상의 T 포즈 용사 3D 모델" caption="캐릭터 이미지를 입력해 생성한 용사 모델입니다. 베이지색 갑옷·보라색 의상·갈색 부츠 등의 특징을 프롬프트로 지정했습니다." />
          <h3>사운드 출처와 적용 범위</h3>
          <p>효과음과 BGM은 <a href="https://www.weloveindies.com/" target="_blank" rel="noopener noreferrer">WeLoveIndies</a>의 리소스를 다운로드해 적용했습니다.</p>
        </section>

        <section id="verification" className="dc-section">
          <h2>적용 중 발견한 문제와 수정</h2>
          <p>개발 중 직접 플레이하며 대사와 모델이 게임에서 의도한 대로 적용되는지 확인했습니다.</p>
          <div className="dc-role-grid">
            <div><h3>대사 음성 연결 누락</h3><p>플레이 중 일부 대사에서 음성이 나오지 않는 것을 발견했습니다. 해당 대사에 음성 리소스를 연결해 누락된 보이스를 적용했습니다.</p></div>
            <div><h3>모델 디테일 이상</h3><p>팀원이 불러온 모델의 디테일이 이상하게 보이는 부분을 발견하고 수정했습니다.</p></div>
          </div>
          <h3>이후 개선 방향 · 대사 ID로 음성 연결</h3>
          <p>현재 구현은 영문 자막 문자열로 음성을 조회하므로, 문장을 수정하면 연결이 끊길 수 있습니다. 자막 문장과 분리된 대사 ID로 음성을 연결하는 구조로 바꾸면, 번역이나 문구 수정 시 음성 연결을 유지하기 쉬워집니다.</p>
        </section>
        </article></div>
        <footer className="dc-footer"><Link className="btn" href="/#ai-projects">← 프로젝트 목록으로</Link><a href={repository} target="_blank" rel="noopener noreferrer">GitHub 저장소</a></footer>
      </div>
    </main>
  );
}
