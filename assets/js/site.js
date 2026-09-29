(() => {
  const cfg = window.FREEDOC_CONFIG || {};
  const repo = cfg.githubRepo || "YOUR_GITHUB_USERNAME/FreeDoc";
  const configured = !repo.includes("YOUR_GITHUB_USERNAME");
  const releaseUrl = configured
    ? `https://github.com/${repo}/releases/latest`
    : "#setup-github";
  const assetUrl = configured
    ? `https://github.com/${repo}/releases/latest/download/${encodeURIComponent(cfg.downloadAsset || "FreeDoc_Setup.exe")}`
    : "#setup-github";

  document.querySelectorAll("[data-release-url]").forEach(a => a.href = releaseUrl);
  document.querySelectorAll("[data-download-url]").forEach(a => a.href = assetUrl);
  document.querySelectorAll("[data-version]").forEach(el => el.textContent = cfg.latestVersion || "Latest");
  document.querySelectorAll("[data-github-repo]").forEach(el => el.textContent = repo);

  const menu = document.querySelector("[data-mobile-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  toggle?.addEventListener("click", () => menu?.classList.toggle("open"));

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));
})();
