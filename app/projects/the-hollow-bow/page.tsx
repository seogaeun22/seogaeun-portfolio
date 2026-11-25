import Link from 'next/link';
import ImageLightbox from '@/components/ImageLightbox';
import ProjectVideoPreview from '@/components/ProjectVideoPreview';
import { Play } from 'lucide-react';

const assets = '/projects/the-hollow-bow';

export const metadata = {
  title: 'The Hollow Bow | 서가은 포트폴리오',
  description: '불꽃 화살을 쏘는 궁수의 판타지 숲 탐험. Blueprint 기반 조준·발사, 몬스터 AI, 상호작용과 UI를 연결한 1인 PvE 프로젝트입니다.',
  openGraph: {
    title: 'The Hollow Bow | 서가은 포트폴리오',
    description: 'Unreal Engine Blueprint로 제작한 3D PvE 게임입니다.',
    url: 'https://seogaeun.com/projects/the-hollow-bow',
    images: [{ url: `${assets}/title-current.png`, width: 1280, height: 720, alt: 'The Hollow Bow 타이틀 화면' }],
  },
};

function ProjectCapture({ file, alt, caption }: { file: string; alt: string; caption: string }) {
  return (
    <figure className="dc-figure">
      <ImageLightbox src={`${assets}/${file}`} alt={alt}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${assets}/${file}`} alt={alt} loading="lazy" width={file === 'blueprint-arrow.png' ? 1130 : file === 'blueprint-monster-tree.png' ? 1080 : 1280} height={file === 'blueprint-arrow.png' ? 520 : file === 'blueprint-monster-tree.png' ? 570 : 720} />
      </ImageLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}


export default function TheHollowBowPage() {
  return (
    <main className="dc-page hollow-bow-page">
      <div className="container">
        <header className="dc-topbar"><Link href="/#general-projects">← 프로젝트 목록으로</Link><span>서가은 · 포트폴리오</span></header>
        <div id="intro" className="dc-overview">
          <header className="dc-header">
            <h1>The Hollow Bow</h1>
            <p className="dc-lead"><strong>불꽃 화살을 쏘는 궁수가 신비의 트로피를 찾아 판타지 숲을 탐험하는 3D PvE 게임입니다.</strong> 숲의 몬스터와 전투하며 이동·조준·발사와 상호작용을 경험하도록 구성했습니다.</p>
            <dl className="dc-facts">
              <div><dt>개발 기간</dt><dd>2025.06.18 ~ 2025.06.20</dd></div>
              <div><dt>팀 구성</dt><dd>1인 프로젝트</dd></div>
              <div><dt>개발 환경</dt><dd>Unreal Engine · Blueprint · PC</dd></div>
              <div><dt>엔진 버전</dt><dd>제작 문서 5.3 / 현재 프로젝트 5.5</dd></div>
            </dl>
            <div className="dc-links">
              <a className="btn btn-primary" href="https://youtu.be/K9KKlUR2OVY" target="_blank" rel="noopener noreferrer"><Play size={18} />게임 소개 영상</a>
              <a className="btn" href="https://youtu.be/K9KKlUR2OVY?t=382" target="_blank" rel="noopener noreferrer"><Play size={18} />플레이 영상 · 6:22부터</a>
            </div>
          </header>
          <ProjectVideoPreview image={`${assets}/title-current.png`} alt="The Hollow Bow 게임 시작 화면" videoId="K9KKlUR2OVY" title="The Hollow Bow" />
        </div>
        <div className="dc-body">
          <nav className="dc-toc" aria-label="상세 페이지 목차">
            <a href="#intro">게임 소개</a><a href="#contribution">담당 작업</a><a href="#implementation">핵심 구현과 선택 이유</a><a href="#results">결과 화면</a>
          </nav>
          <article className="dc-article" aria-label="The Hollow Bow 제작 과정">
            <section id="contribution" className="dc-section">
              <h2>담당 작업</h2>
              <p className="dc-takeaway">게임 기획과 Blueprint 기반 게임플레이를 1인 제작했습니다.</p>
              <dl className="dc-contributions">
                <div><dt>플레이어</dt><dd>궁수의 이동·달리기, 조준 카메라 전환, 화살 발사와 피격 처리</dd></div>
                <div><dt>전투·몬스터</dt><dd>몬스터의 감지·배회·추적, 근접 공격 및 체력·사망 상태 연결</dd></div>
                <div><dt>상호작용·UI</dt><dd>왕관 획득, 체력·자원 UI, 타이틀에서 플레이 맵으로 이동하는 흐름 구성</dd></div>
                <div><dt>리소스 통합</dt><dd>캐릭터·애니메이션·숲·이펙트·사운드 에셋을 게임 동작에 연결</dd></div>
              </dl>
              <h3>게임 구현과 리소스 제작의 구분</h3>
              <p>직접 작업한 범위는 게임 기획, Blueprint 로직, 레벨 구성과 에셋 적용입니다. 캐릭터·배경·이펙트·사운드에는 Fab, Starter Content, 숲·식생 팩, MixedVFX, FootstepsMiniPack 등의 외부 리소스를 사용했습니다.</p>
            </section>

            <section id="implementation" className="dc-section">
              <h2>핵심 구현과 선택 이유</h2>
              <p className="dc-takeaway">궁수 조작, 몬스터의 상태 전환, 획득 상호작용을 각각 나누고 Blueprint로 연결했습니다.</p>
              <h3>조준 판정과 화살 표현 분리</h3>
              <p><code>Archer</code>는 카메라 방향의 Line Trace로 명중 대상을 조회하고 <code>ApplyDamage</code>로 피해를 전달합니다. 별도의 <code>Arrow</code> 액터는 화살 메시와 불꽃 이펙트를 표시합니다. 현재 연결에서 피해 판정은 발사 시점의 Trace를 기준으로 하며, 날아가는 화살의 충돌 시점과는 구분됩니다.</p>
              <p>이 구조는 화면에서 겨냥한 대상의 판정과 발사체의 시각적 표현을 각각 조정할 수 있습니다. 우클릭 조준에서는 Spring Arm 길이·카메라 위치·캐릭터 회전 방식을 함께 바꿉니다.</p>
              <details className="dc-code"><summary>Blueprint 사진 보기 <span>Arrow · 화살 충돌 처리</span></summary><ProjectCapture file="blueprint-arrow.png" alt="Arrow Blueprint의 실제 충돌 처리 노드와 연결선" caption="Arrow · 충돌 시 몬스터 판별, 화살 무시 처리, 이동 정지와 위치·회전 설정" /></details>

              <h3>감지·배회·추적과 근접 공격 분리</h3>
              <p><code>MonsterAIController</code>가 감지한 플레이어를 Blackboard의 <code>TargetPlayer</code>에 저장합니다. <code>MonsterBT</code>는 대상이 있으면 추적하고, 없으면 탐색 가능한 영역에서 임의의 위치를 골라 이동합니다. Blackboard 조건의 <code>FlowAbortMode=Both</code>는 대상 상태가 바뀔 때 실행 중인 분기를 전환하도록 설정되어 있습니다.</p>
              <p>Behavior Tree는 배회와 추적 경로를 담당하고, <code>Monster</code>는 플레이어와의 거리·공격 상태를 검사해 근접 공격과 피해를 처리합니다. 이동의 판단과 공격·피격 반응을 각각 살펴보고 조정할 수 있는 구조입니다.</p>
              <details className="dc-code"><summary>Blueprint 사진 보기 <span>MonsterBT · 배회·추적 행동 트리</span></summary><ProjectCapture file="blueprint-monster-tree.png" alt="MonsterBT 에디터의 실제 배회·추적 행동 트리" caption="MonsterBT · TargetPlayer 조건에 따른 추적과 임의 위치 배회 분기" /></details>

              <h3>인터페이스로 연결한 왕관 획득</h3>
              <p>궁수와 왕관이 충돌하면 <code>BPI_Stick</code>의 <code>Grab</code>을 호출하고, 왕관을 캐릭터의 <code>HeadTop_EndSocket</code>에 부착합니다. <code>BP_Crown</code>의 Grab 구현은 왕관의 충돌을 비활성화합니다. 획득한 오브젝트가 캐릭터에 붙은 뒤 다시 충돌하는 일을 줄이는 구조입니다.</p>
            </section>

            <section id="results" className="dc-section">
              <h2>결과 화면</h2>
              <ProjectCapture file="forest-current.png" alt="판타지 숲의 궁수와 몬스터, 화면 왼쪽 위의 HP·MP UI" caption="TitleMap의 PLAY로 진입한 숲 · 궁수와 몬스터, HP·MP UI" />
            </section>
          </article>
        </div>
        <footer className="dc-footer"><Link className="btn" href="/#general-projects">← 프로젝트 목록으로</Link><a href="https://youtu.be/K9KKlUR2OVY?t=382" target="_blank" rel="noopener noreferrer">플레이 영상</a></footer>
      </div>
    </main>
  );
}
