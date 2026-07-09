# kristopher-casey-resume

Static resume site, ready for GitHub Pages.

## Local preview

```
python3 -m http.server
```

Then open http://localhost:8000

## To do before going live

- **Headshot**: replace the "KC" circle in the hero (`.avatar-placeholder` in `index.html` / `styles.css`) with a real photo. Drop the image in `assets/` (e.g. `assets/headshot.jpg`) and swap the placeholder `<div>` for an `<img>` tag.
- **Resume PDF**: `assets/resume.pdf` is generated from `Kristopher_Casey_Resume_2026.html`. Regenerate it any time the resume content changes:
  ```
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="assets/resume.pdf" "file:///path/to/Kristopher_Casey_Resume_2026.html"
  ```
- **GitHub repo**: once you have your GitHub username, rename/create the repo as `<username>.github.io` and push this project to it so it serves at the root of `https://<username>.github.io`.
- **Custom domain**: add a `CNAME` file at the project root containing just your domain (e.g. `kristophercasey.com`), and point your domain's DNS at GitHub Pages (A records to GitHub's IPs, or a CNAME record to `<username>.github.io` for a subdomain).
