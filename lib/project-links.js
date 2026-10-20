export function getGithubLabel(url) {
  const path = new URL(url).pathname.replace(/\/$/, '');
  if (path === '/klop2211/SandyHeroesClient') return '싱글플레이 버전';
  if (path === '/ehdxorhrl/SandyHeroes_--') return '멀티플레이 확장 버전';
  return path.split('/').filter(Boolean).length === 1 ? 'GitHub 프로필' : '소스 코드';
}

