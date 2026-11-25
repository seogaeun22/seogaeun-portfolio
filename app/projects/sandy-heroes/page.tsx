import Link from 'next/link';
import ImageLightbox from '@/components/ImageLightbox';
import ProjectVideoPreview from '@/components/ProjectVideoPreview';
import { FileText, Github, Play } from 'lucide-react';

const repo = 'https://github.com/klop2211/SandyHeroesClient';
const multiplayerRepo = 'https://github.com/ehdxorhrl/SandyHeroes_--';
const snapshot = '88e270a';
const report = `/reports/${encodeURIComponent('[양식] 2025 게임공학과 최종 보고서.hwp')}`;

export const metadata = {
  title: 'Sandy Heroes | 서가은 포트폴리오',
  description: 'DirectX 12 기반 PvE FPS. 그림자 매핑·파티클·충돌·맵 제작과 실제 수정 경험을 소개합니다.',
};

function Code({ file, revision = snapshot, children }: { file: string; revision?: string; children: string }) {
  return <details className="dc-code"><summary>핵심 코드 보기<span>{file}</span></summary><div className="dc-code-content">
    <a href={`${repo}/blob/${revision}/${file}`} target="_blank" rel="noopener noreferrer">GitHub에서 원본 보기</a><pre><code>{children}</code></pre>
  </div></details>;
}

export default function SandyHeroesPage() {
  return <main className="dc-page"><div className="container">
    <header className="dc-topbar"><Link href="/#general-projects">← 프로젝트 목록으로</Link><span>서가은 · 포트폴리오</span></header>
    <div id="introduction" className="dc-overview"><header className="dc-header">
      <h1>Sandy Heroes</h1>
      <p className="dc-lead"><strong>총기와 속성, 스크롤을 조합해 스테이지를 돌파하는 3D PvE FPS입니다.</strong> DirectX 12로 렌더링과 게임 시스템을 구성하고, 전투와 탐색·플랫폼·미로 구간을 연결했습니다.</p>
      <dl className="dc-facts">
        <div><dt>개발 기간</dt><dd>2024.09 ~ 2025.08</dd></div><div><dt>팀 구성</dt><dd>3인 · 클라이언트 2명 / 서버 1명</dd></div>
        <div><dt>개발 환경</dt><dd>C++ · DirectX 12 · HLSL</dd></div><div><dt>담당 영역</dt><dd>그림자·파티클·충돌·맵 콘텐츠</dd></div>
      </dl>
      <div className="dc-links">
        <a className="btn btn-primary" href="https://youtu.be/CVMWE64RcTc" target="_blank" rel="noopener noreferrer"><Play size={18} />플레이 영상</a>
        <a className="btn" href={report} download><FileText size={18} />리포트 다운로드</a>
        <a className="btn" href={repo} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub · 싱글플레이</a>
        <a className="btn" href={multiplayerRepo} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub · 멀티플레이</a>
      </div>
    </header>
    <ProjectVideoPreview image="https://img.youtube.com/vi/CVMWE64RcTc/maxresdefault.jpg" alt="Sandy Heroes 프로젝트 대표 이미지" videoId="CVMWE64RcTc" title="Sandy Heroes" />
    </div>
    <div className="dc-body"><nav className="dc-toc" aria-label="상세 페이지 목차">
      <a href="#introduction">게임 소개</a><a href="#contribution">담당 작업</a><a href="#implementation">핵심 구현과 선택 이유</a><a href="#results">결과 화면</a><a href="#improvements">실제 문제와 수정 경험</a>
    </nav><article className="dc-article" aria-label="Sandy Heroes 제작 경험">
      <section id="contribution" className="dc-section"><h2>담당 작업</h2>
        <p className="dc-takeaway">클라이언트 팀원으로서 전투의 시각적 피드백과 충돌 판정, 맵 콘텐츠를 구현했습니다.</p>
        <dl className="dc-contributions">
          <div><dt>렌더링</dt><dd>정적·스킨 메시의 그림자 매핑, 발사·피격·드롭 아이템의 파티클을 구현했습니다. 총기 파티클 색을 피격 효과에 연결해 속성을 구분했습니다.</dd></div>
          <div><dt>충돌</dt><dd>벽·계단·생물체 간 충돌과 대쉬 전 충돌 검사, 총알·화염방사기 판정을 작업했습니다. 빠른 총알의 판정 누락을 광선 교차 검사로 수정했습니다.</dd></div>
          <div><dt>콘텐츠</dt><dd>맵 수정과 투명벽 배치, 황금 피라미드 수집 콘텐츠 및 스테이지 클리어 로직을 작업했습니다. 여러 종류의 총기를 수집·교체하는 콘텐츠와 보물상자에서 얻는 스크롤 효과를 추가했습니다. 스크롤은 이동속도 증가, 대쉬 게이지 충전 가속, 무기 강화, 속성별 피해·효과 강화 등으로 플레이어의 성장을 돕습니다.</dd></div>
          <div><dt>길찾기</dt><dd>별도 개발 이력에서 스테이지 노드와 A* 경로 탐색, 몬스터의 노드 이동을 구현했습니다. 현재 main 소스에는 AStar 파일이 포함되지 않아 해당 개발 이력을 기준으로 설명합니다.</dd></div>
        </dl>
      </section>
      <section id="implementation" className="dc-section"><h2>핵심 구현과 선택 이유</h2>
        <h3>1. 메시 종류에 맞춰 연결한 그림자 패스</h3>
        <p>빛 시점의 깊이를 그림자 맵에 기록하고, 일반 렌더링에서 그림자 좌표를 이용해 조명에 반영합니다. 캐릭터처럼 변형되는 스킨 메시도 별도의 그림자 셰이더로 처리합니다. 지형뿐 아니라 움직이는 캐릭터까지 같은 공간에 놓인 느낌을 전달하는 구성입니다.</p>
        <Code file="ShadowShader.cpp">{`rasterizer_desc.DepthBias = 10000;
rasterizer_desc.DepthBiasClamp = 0.0f;
rasterizer_desc.SlopeScaledDepthBias = 1.0f;
rasterizer_desc.DepthClipEnable = TRUE;`}</Code>
        <p>깊이 바이어스를 두어 표면과 그림자 깊이가 겹칠 때 생기는 자기 그림자 문제를 완화하는 구조입니다.</p>
        <h3>2. 점을 카메라 방향의 면으로 확장하는 파티클</h3>
        <p>Geometry Shader에서 파티클 위치를 중심으로 네 꼭짓점을 만들고 카메라를 향하게 합니다. 발사·피격 효과에 위치·크기·색을 전달하고, 구형·원뿔형 등의 방출 형태를 컴포넌트에서 관리합니다. 작은 이펙트의 방향을 카메라에 맞추면서 총기 속성을 색으로 표현할 수 있습니다.</p>
        <Code file="ParticleShader.hlsl">{`float3 look = normalize(g_camera_position - gin[0].PosW);
float3 right = cross(g_camera_up_axis, look);

float halfWidth = 0.5f * gin[0].Size.x;
float halfHeight = 0.5f * gin[0].Size.y;

float4 v[4];
v[0] = float4(gin[0].PosW + halfWidth * right - halfHeight * g_camera_up_axis, 1.0f);
v[1] = float4(gin[0].PosW + halfWidth * right + halfHeight * g_camera_up_axis, 1.0f);
v[2] = float4(gin[0].PosW - halfWidth * right - halfHeight * g_camera_up_axis, 1.0f);
v[3] = float4(gin[0].PosW - halfWidth * right + halfHeight * g_camera_up_axis, 1.0f);`}</Code>
        <h3>3. 가까운 교차 대상을 선택하는 총알 판정</h3>
        <p>발사 광선을 정규화하고 충돌체와의 교차 거리 t를 비교해 가장 가까운 대상을 선택합니다. 프레임 사이를 빠르게 이동하는 총알이 충돌체를 통과하는 문제에 대응해, 물리적인 총알 상자의 겹침만 확인하던 방식에서 발사 방향을 검사하는 방식으로 바꿨습니다.</p>
        <Code file="BaseScene.cpp">{`const BoundingOrientedBox& box = box_collider->animated_box();
float t = 0.f;
if (box.Intersects(origin, direction, t))
{
    if (t < closest_t)
    {
        closest_t = t;
        closest_monster = object;
    }
}`}</Code>
        <h3>4. 노드 기반 A* 길찾기 · 별도 개발 이력</h3>
        <p>스테이지 1의 노드와 A* 탐색을 추가한 뒤, 전체 스테이지로 노드를 확장하고 몬스터가 노드를 따라 이동하도록 개발했습니다. 이동 가능한 지점을 노드로 표현하고 연결 관계에서 경로를 찾는 방식입니다. 이 작업은 당시 코드와 커밋을 기준으로 소개합니다.</p>
        <p className="dc-source"><a href={`${repo}/commit/3b9ff0f`} target="_blank" rel="noopener noreferrer">스테이지 1 노드·A* 추가</a> · <a href={`${repo}/commit/1a6ba91`} target="_blank" rel="noopener noreferrer">전체 스테이지 확장·몬스터 이동</a></p>
        <Code file="AStar.cpp" revision="1a6ba91">{`auto heuristic = [](Node* a, Node* b) {
    XMVECTOR pa = XMLoadFloat3(&a->position);
    XMVECTOR pb = XMLoadFloat3(&b->position);
    XMVECTOR d = XMVectorSubtract(pa, pb);
    return XMVectorGetX(XMVector3Length(d));
};

std::priority_queue<Node*, std::vector<Node*>, CompareNode> openSet;
start->gCost = 0.0f;
start->hCost = heuristic(start, goal);
openSet.push(start);`}</Code>
      </section>
      <section id="results" className="dc-section"><h2>결과 화면</h2>
        <figure className="dc-figure">
          <ImageLightbox src="/projects/sandy-heroes/boss-battle.png" alt="보스 전투 화면">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/sandy-heroes/boss-battle.png" alt="공중의 드래곤 보스를 조준하는 1인칭 전투 화면과 붉은 파티클 효과" loading="lazy" />
          </ImageLightbox>
          <figcaption>보스 전투 · 드래곤 보스를 조준하는 장면과 붉은 파티클 효과</figcaption>
        </figure>
      </section>
      <section id="improvements" className="dc-section"><h2>실제 문제와 수정 경험</h2>
        <h3>빠른 총알의 충돌 판정 누락</h3><p>총알 속도가 빨라 OBB 겹침 검사만으로 충돌이 제대로 잡히지 않는 문제가 있었습니다. 발사 광선과 충돌체의 교차를 검사하는 로직을 추가했습니다. 해당 변경은 커밋 설명과 실제 CheckRayHitEnemy 구현에서 함께 확인됩니다.</p>
        <p className="dc-source"><a href={`${repo}/commit/78864cb`} target="_blank" rel="noopener noreferrer">총알 충돌 체크 로직 수정 커밋</a></p>
        <h3>병합 후 스킨 메시 그림자가 사라짐</h3><p>브랜치 병합 뒤 스킨 메시 그림자가 나오지 않는 문제가 발생했습니다. 그림자 패스에서 메시를 그리는 분기와 씬 렌더링 연결을 수정했습니다. 현재 코드는 일반 메시와 스킨 메시의 그림자 경로를 별도로 구성합니다.</p>
        <p className="dc-source"><a href={`${repo}/commit/bd7179c`} target="_blank" rel="noopener noreferrer">병합 후 그림자 매핑 오류 수정 커밋</a></p>
        <h3>벽·계단과 생물체 충돌의 연속적인 조정</h3><p>벽과 계단의 충돌 호환, 대쉬 전 충돌 검사, 생물체가 겹칠 때 밀어내는 처리에 대한 구현·수정 기록이 있습니다. 하나의 충돌 방식으로 모든 상황을 처리하기보다 지면·벽면·생물체의 상황을 나눠 조정했습니다.</p>
        <p className="dc-source"><a href={`${repo}/commit/1e8d4f8`} target="_blank" rel="noopener noreferrer">벽·계단 충돌 호환</a> · <a href={`${repo}/commit/7140b65`} target="_blank" rel="noopener noreferrer">생물체 밀어내기 오류 수정</a></p>
        <h3>남아 있는 개선 과제</h3><p>팀 최종 보고서에는 플랫폼·미로 구간의 난이도 편차, 속성·강화 밸런스, 빠른 몬스터에 대한 레이저 폭격의 판정 일관성이 개선 과제로 기록되어 있습니다. 수정 완료로 표현하지 않고 이후 검증이 필요한 항목으로 남겼습니다.</p>
      </section>
    </article></div><footer className="dc-footer"><Link href="/#general-projects">← 프로젝트 목록으로</Link><a href={report} download>최종 보고서 다운로드</a></footer>
  </div></main>;
}
