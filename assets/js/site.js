(() => {
  const cfg = window.FREEDOC_CONFIG || {};
  const repo = cfg.githubRepo || "YOUR_GITHUB_USERNAME/FreeDoc";
  const configured = !repo.includes("YOUR_GITHUB_USERNAME");
  const releaseUrl = configured ? `https://github.com/${repo}/releases/latest` : "#";

  const applyRelease = (release = {}) => {
    const version = release.latest || cfg.latestVersion || "Latest";
    const asset = release.downloadAsset || cfg.downloadAsset || (version !== "Latest" ? `FreeDoc_Setup_${version}.exe` : "FreeDoc_Setup.exe");
    const assetUrl = configured ? `https://github.com/${repo}/releases/latest/download/${encodeURIComponent(asset)}` : releaseUrl;
    const notes = release.notes && (release.notes["zh-CN"] || release.notes.zh || release.notes.en);

    document.querySelectorAll("[data-release-url]").forEach(a => a.href = releaseUrl);
    document.querySelectorAll("[data-download-url]").forEach(a => a.href = assetUrl);
    document.querySelectorAll("[data-version]").forEach(el => el.textContent = version);
    document.querySelectorAll("[data-release-date]").forEach(el => el.textContent = release.released || "");
    document.querySelectorAll("[data-release-notes]").forEach(el => el.textContent = notes || "持续改进阅读、编辑、转换与稳定性。具体内容以 GitHub Release Notes 为准。");
    document.querySelectorAll("[data-github-repo]").forEach(el => el.textContent = repo);
  };

  applyRelease();
  fetch(`version.json?t=${Date.now()}`, { cache: "no-store" })
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(applyRelease)
    .catch(() => {});

  const menu = document.querySelector("[data-mobile-menu]");
  const toggle = document.querySelector("[data-menu-toggle]");
  toggle?.addEventListener("click", () => menu?.classList.toggle("open"));

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const search = document.querySelector("#toolSearch");
  const cards = [...document.querySelectorAll("#toolGrid .tool-card")];
  const noResults = document.querySelector("#noResults");
  search?.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const text = `${card.textContent} ${card.dataset.tool || ""}`.toLowerCase();
      const visible = !q || text.includes(q);
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (noResults) noResults.hidden = shown !== 0;
  });
})();
