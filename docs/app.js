'use strict';
document.querySelector('#year').textContent = String(new Date().getFullYear());

// Keep the verified, dated HTML snapshot if GitHub is slow or rate-limited.
(async function refreshGitHubStats() {
  const widget = document.querySelector('.github-widget');
  if (!widget) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch('https://api.github.com/repos/RayforceDB/rayforce', {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
      credentials: 'omit'
    });
    if (!response.ok) return;
    const data = await response.json();
    const counts = { stars: data.stargazers_count, forks: data.forks_count };
    if (!Object.values(counts).every(value => Number.isSafeInteger(value) && value >= 0)) return;
    const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });
    for (const [name, value] of Object.entries(counts)) {
      const element = widget.querySelector(`[data-gh-stat="${name}"]`);
      element.textContent = value < 1000 ? String(value) : compact.format(value);
      element.closest('a').setAttribute('aria-label', `${value.toLocaleString('en')} GitHub ${name}`);
      element.closest('a').title = `${value.toLocaleString('en')} ${name} · updated from GitHub`;
    }
    widget.dataset.updatedAt = new Date().toISOString();
  } catch {
    // Snapshot and repository links remain available when fetching fails.
  } finally {
    clearTimeout(timeout);
  }
})();
