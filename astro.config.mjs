import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://robdor80.github.io' : 'https://robertodorado.es',
  base: isGitHubPages ? '/robertodorado.es' : '/',
  output: 'static',
});
