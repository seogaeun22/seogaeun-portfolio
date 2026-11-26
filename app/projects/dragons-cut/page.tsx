import Link from 'next/link';
import ImageLightbox from '@/components/ImageLightbox';
import ProjectVideoPreview from '@/components/ProjectVideoPreview';
import { Github, Play, ExternalLink } from 'lucide-react';

const repository = 'https://github.com/dionme2622/Epic_AI_MegaJam';
const source = (path: string) => `${repository}/blob/main/MegaJam/${path}`;

export const metadata = {
  title: "Dragon’s Cut | 서가은 포트폴리오",
  description: '3D 퍼즐 어드벤처 Dragon’s Cut. Codex에 연출과 구현 조건을 전달하고 결과를 검토·수정한 과정, Inworld 보이스와 Tripo 모델 제작 경험을 소개합니다.',
};

function ProjectCapture({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return (
    <figure className="dc-figure">
      <ImageLightbox src={`/projects/dragons-cut/${file}`} alt={alt}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/projects/dragons-cut/${file}`} alt={alt} loading="lazy" />
      </ImageLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function DragonsCutPage() {
  return (
    <main className="dc-page">
      <div className="container">
        <header className="dc-topbar"><Link href="/#ai-projects">← 프로젝트 목록으로</Link><span>서가은 · 포트폴리오</span></header>
        <div className="dc-overview"><header className="dc-header">
          <h1>Dragon’s Cut</h1>
          <p className="dc-lead"><strong>그래픽 설정을 바꾸며 숨겨진 단서를 찾는 3D 퍼즐 어드벤처 게임입니다.</strong> 영화에서 편집되어 사라진 다리를 되찾는 이야기입니다. Codex에 장면별 연출과 구현 조건을 전달하고, 결과를 직접 플레이하며 수정했습니다. Inworld 보이스와 Tripo 모델도 제작해 게임에 적용했습니다.</p>
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
        <ProjectVideoPreview image="/projects/dragons-cut/thumbnail.png" alt="Dragon’s Cut 게임 대표 이미지" videoId="CHJFBZ8OWZ4" title="Dragon’s Cut" /></div>
        <div className="dc-body">
        <nav className="dc-toc" aria-label="상세 페이지 목차">
          <a href="#contribution">담당 작업</a><a href="#dialogue">자막·음성</a><a href="#cinematic">시네마틱</a><a href="#assets">캐릭터·사운드</a><a href="#verification">적용 중 문제와 개선</a>
        </nav>
        <article className="dc-article" aria-label="Dragon’s Cut 제작 과정">
        <section id="contribution" className="dc-section">
          <h2>담당 작업과 AI 활용 방식</h2>
          <p className="dc-takeaway">장면의 의도와 작업 범위는 제가 정하고, Codex로 구현·수정을 진행했습니다. 생성된 화면과 소리를 확인하며 카메라, 자막, 음성의 어색한 부분을 구체적으로 재지시했습니다.</p>
          <dl className="dc-contributions">
            <div><dt>AI 활용 개발</dt><dd>OpenAI Codex를 활용한 게임 개발, 구현 결과의 플레이 확인과 오류 수정</dd></div>
            <div><dt>시네마틱</dt><dd>장면 순서·카메라·대사 조건을 프롬프트로 전달하고 Codex로 오프닝·엔딩 시퀀서 제작·수정</dd></div>
            <div><dt>캐릭터·보이스</dt><dd>Tripo로 용사 모델 제작, Inworld로 캐릭터 대사 보이스 제작</dd></div>
            <div><dt>게임 적용</dt><dd>인게임 자막·음성 연결, WeLoveIndies 사운드 적용</dd></div>
          </dl>
        </section>

        <section id="dialogue" className="dc-section">
          <h2>Codex로 자막·음성 연결과 UI 조정</h2>
          <p className="dc-takeaway">생성한 보이스를 Codex로 대사에 연결하고, 직접 화면을 보며 자막의 가독성과 캐릭터가 보이는 정도를 조정했습니다.</p>
          <p><strong>실제 요청 발췌:</strong> “일단 맨 처음 자막 한 개만 적용해보자. 그리고 한글 자막과 영어 자막 모두 한 줄로 끝내게 해줘.” 먼저 한 개에 적용한 뒤, 자막이 드래곤을 가리는 문제를 발견해 크기와 위치를 재지시하고 화면 상단으로 옮겼습니다.</p>
          <p>대사마다 음성 길이가 달라 자막을 고정된 시간에 지우면 긴 대사가 끝나기 전에 텍스트가 사라질 수 있습니다. 표시 시간을 <strong>기본값과 ‘음성 길이 + 0.25초’ 중 큰 값</strong>으로 정해, 긴 대사도 끝까지 읽을 수 있도록 처리합니다.</p>
          <ol className="dc-steps">
            <li><strong>대사별 음성 연결</strong><p>영문 대사에 해당하는 음성 에셋을 조회합니다.</p></li>
            <li><strong>이전 음성 정리</strong><p>새 대사를 재생하기 전에 기존 음성을 멈춰 두 음성이 겹치지 않도록 합니다.</p></li>
            <li><strong>표시 시간 조정</strong><p>재생할 음성의 길이를 읽어 자막 유지 시간을 늘립니다.</p></li>
          </ol>
          <ProjectCapture file="subtitle-lobby-route.png" alt="화자와 한국어·영어 자막을 화면 상단에 표시한 플레이 화면" caption="화자와 한국어·영어 자막을 화면 상단에 함께 표시합니다." />
          <p className="dc-source">관련 소스: <a href={source('SourceAssets/VoicePrompts/install_gameplay_voices.py')} target="_blank" rel="noopener noreferrer">음성 준비·임포트 스크립트</a> · <a href={source('Source/MegaJam/DirectorCutVoiceLookup.h')} target="_blank" rel="noopener noreferrer">대사별 음성 조회</a></p>
        </section>

        <section id="cinematic" className="dc-section">
          <h2>Codex와 함께 만든 시네마틱·엔딩</h2>
          <p className="dc-takeaway">시작 장면 → 대사 → 하체 선택 → 선택한 모습 공개 순서로 연출을 나눠 요청하고, 이후 분기별 움직임과 카메라를 보완했습니다.</p>
          <p><strong>실제 요청 발췌:</strong> “용사와 드래곤의 대사는 추후에 보이스 넣을 예정, 지금은 자막으로만 넣기”, “각 하체 에셋은 이미 존재함. 이것들을 이용해서 넣을 것.” 기존 에셋 사용과 우선 구현할 범위를 명시해 엔딩을 단계적으로 제작했습니다.</p>
          <h3>시퀀서 타이밍과 자막 연결</h3>
          <p>시퀀서에 맞춰 표시되는 자막을 화자·한국어·영어로 나눠 읽기 쉽게 구성했습니다. 구현에서는 자막 액터의 숨김 상태로 현재 대사를 선택하고, 기존 이미지 메시 대신 Slate UI에 출력해 시퀀서의 표시 타이밍을 유지합니다.</p>
          <h3>시퀀스가 끝나는 시점에 레벨 이동</h3>
          <p>SequencePlayer의 <strong>OnFinished 이벤트</strong>에 레벨 이동 함수를 연결합니다. 시퀀스 액터와 목적지 레벨이 설정되어 있을 때만 동작하며, 별도의 대기 시간 대신 실제 재생 종료 시점을 사용합니다.</p>
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
          <p><strong>결과 검토와 재지시:</strong> 수레 엔딩에서 카메라가 돌아오자 경사면이 갑자기 보이는 문제를 발견했습니다. 평지에서 출발해 내리막에 진입할 때 가속하도록 요청해, 지형의 일관성과 움직임을 함께 수정했습니다.</p>
          <div className="dc-capture-grid dc-capture-grid-three">
            <ProjectCapture file="ending-dragon.png" alt="원래 드래곤 다리를 선택한 엔딩 결과 화면" caption="드래곤 다리 · 원래의 나로" />
            <ProjectCapture file="ending-cart.png" alt="수레를 선택한 엔딩 결과 화면" caption="수레 · 멈출 수 없는 감독판" />
            <ProjectCapture file="ending-knight.png" alt="용사 다리를 선택한 엔딩 결과 화면" caption="용사 다리 · 빌려온 당당함" />
          </div>
          <p className="dc-source">관련 소스: <a href={source('SourceAssets/Ending/README.md')} target="_blank" rel="noopener noreferrer">엔딩 연출·분기 문서</a> · <a href={source('Source/MegaJam/DirectorCutEnding.cpp')} target="_blank" rel="noopener noreferrer">엔딩 제어 코드</a></p>
        </section>

        <section id="assets" className="dc-section">
          <h2>AI 캐릭터·보이스 제작과 사운드 적용</h2>
          <p className="dc-takeaway">Tripo로 용사 모델을 만들고, Codex와 함께 작성한 연기 지시문으로 Inworld 보이스를 제작했습니다. 생성 결과를 듣고 캐릭터에 맞게 감정 강도를 조정했습니다.</p>
          <h3>Inworld · 캐릭터 대사 보이스</h3>
          <p>드래곤의 연기가 지나치게 화난 느낌이라, 살짝 짜증 난 정도로 낮추도록 재요청했습니다. 아래는 그 지시를 반영해 Codex가 작성한 Inworld 입력용 프롬프트입니다.</p>
          <p lang="en"><code>[a soft sigh, mildly annoyed but mostly tired, speaking casually with understated humor] Sigh... What&apos;s wrong with the animation now?</code></p>
          <p>긴 설명 대신 Playground에 바로 넣을 수 있는 ‘[연기 지시] 대사’ 형식을 요구해 대사별 입력을 정리했습니다.</p>
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
          <p><strong>실제 요청 발췌:</strong> “사운드가 길어도 사실상 소리가 나는 부분은 적어. 그래서 불꽃이 나오는 타이밍에 딱 소리가 나게 해줬으면 좋겠어.” 적용된 소리를 듣고 다시 요청해, Codex로 앞부분의 거의 들리지 않는 약 1.18초를 건너뛰고 불꽃과 실제 소리의 시작을 맞췄습니다.</p>
        </section>

        <section id="verification" className="dc-section">
          <h2>AI 구현 결과 검토와 개선</h2>
          <p>AI가 구현한 결과를 직접 플레이하며 연출 의도와 대조했습니다. 자막의 화면 가림, 수레의 가속, 효과음 시작점처럼 실제 화면과 소리에서 발견한 문제를 구체적인 수정 요청으로 전달했습니다.</p>
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
