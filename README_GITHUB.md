# FreeDoc website — GitHub Pages static package

This folder is already a complete static website. No Node.js or build step is required.

## 1. Create a GitHub repository
Recommended repository name: `FreeDoc` or `freedoc-site`.

Upload **all files and folders in this package to the repository root**.

## 2. Set your GitHub repository URL
Edit:

`assets/js/config.js`

Change:

```js
githubRepo: "YOUR_GITHUB_USERNAME/FreeDoc"
```

to your real repository, for example:

```js
githubRepo: "zirujiang/FreeDoc"
```

Also update `latestVersion` and `downloadAsset` when you release a new installer.

## 3. Enable GitHub Pages
This package includes `.github/workflows/pages.yml`.

In GitHub:

**Repository → Settings → Pages → Source → GitHub Actions**

Push to `main`. GitHub will deploy the site automatically.

## 4. Use freedoc.zirulab.org
This package already contains:

`CNAME`

with:

`freedoc.zirulab.org`

In GitHub Pages settings, set Custom domain to `freedoc.zirulab.org`.

Because `zirulab.org` is managed in Cloudflare, add the DNS record Cloudflare/GitHub asks for. Usually for a subdomain it is a CNAME:

- Type: CNAME
- Name: freedoc
- Target: `<YOUR_GITHUB_USERNAME>.github.io`

For initial verification, if GitHub has trouble validating the domain through Cloudflare proxy, temporarily set the DNS record to **DNS only** (gray cloud), complete verification / HTTPS provisioning, then decide whether to enable proxy later.

## 5. Publish the installer through GitHub Releases
Create a Release and upload e.g.:

`FreeDoc_Setup_1.3.15.exe`

The website's download button is configured to use:

`https://github.com/<repo>/releases/latest/download/<downloadAsset>`

## 6. Files included

- `index.html` — product home page
- `features.html` — features
- `download.html` — download and release instructions
- `privacy.html` — privacy page
- `faq.html` — FAQ
- `changelog.html` — changelog
- `404.html` — GitHub Pages 404
- `CNAME` — custom domain
- `.nojekyll` — disable Jekyll processing
- `.github/workflows/pages.yml` — GitHub Actions deployment
- `assets/` — CSS, JS, screenshots and logo

## Before public launch

1. Build a real standalone installer.
2. Test on a clean Windows 10/11 PC without Python.
3. Review all third-party licenses.
4. Update the privacy page if you later add analytics, ads, accounts, cloud conversion or payments.
5. Use code signing for the Windows installer when possible.
