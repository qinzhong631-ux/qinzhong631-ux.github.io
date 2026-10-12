# Jiaqi Qin — Academic Homepage

A clean, bilingual (English / Chinese) personal academic homepage for **Jiaqi Qin (秦家祺)**, designed as a static site for GitHub Pages. Its layout takes inspiration from academic portfolio conventions rather than copying the reference site's code or assets.

## Preview and content

- Academic profile, affiliation, and current AI interests.
- Featured MiniGPT project with a simplified, explanatory architecture illustration, verified technical details, and links to the real repository.
- Learning journey, current education, school email, personal email, and GitHub contact.
- English / Chinese language switch and responsive mobile navigation.

**Content is intentionally conservative.** There are no invented publications, research internships, or awards. The two email addresses were supplied by the site owner. Update the site as verifiable achievements become available.

## Launch locally

Double-click `index.html` in your browser. Or start a simple local HTTP server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000/.

## Personalize

1. **Name, description, school**: edit text in `index.html`.
2. **Language switch**: where present, edit both `data-en` and `data-zh` on the corresponding HTML element (English default text should also match `data-en`).
3. **Photo**: replace `assets/avatar.svg` with your portrait or update `<img class="portrait" ...>` to an image in `assets/`; write an appropriate `alt` attribute. Use a compressed JPG/WebP image for best performance.
4. **Contact**: the `#contact` section includes school email `jiaqiqin@mail.nwpu.edu.cn`, personal email `qinzhong631@gmail.com`, and GitHub. Both addresses are public when the website is deployed; edit or remove them in `index.html` whenever needed.
5. **CV**: add `assets/CV.pdf`, link it in the hero or contact section; do **not** publish private phone numbers or student IDs.
6. **New research**: add actual papers and affiliations only when confirmed. If the MiniGPT repo changes, update its statistics and description here as well.
7. **Colors, layout**: edit `styles.css`. Navigation and language behavior is in `script.js`.

## Publish with GitHub Pages

1. In your GitHub account `qinzhong631-ux`, create a **public** repository named exactly `qinzhong631-ux.github.io`.
2. Upload the **contents** of this directory to the repo root (`index.html`, `styles.css`, `script.js`, `assets/`, `README.md`), not an extra nested `jiaqi-homepage/` directory.
3. Open the repository **Settings → Pages**.
4. Choose **Deploy from a branch → main → /(root)** and save.
5. When GitHub Pages has finished deploying, visit **https://qinzhong631-ux.github.io/**.

The first publish can take up to about 10 minutes. The site is static: no build step, Node.js, API keys, or hosting bill is required.

## Directory

```text
index.html       # Content and page markup
styles.css       # Responsive academic visual design
script.js        # Language switch and mobile menu
assets/avatar.svg  # Initials illustration (replaceable)
assets/favicon.svg # Small browser icon
README.md        # Setup and editing instructions
```

## Technical note

MiniGPT details are based on the project's publicly available README when the template was created (October 2026): two Transformer blocks, four attention heads, 113,920 parameters with a 76-token vocabulary, character-level prediction, and a local Gradio app. Verify stats against your repo before publishing later revisions.

The `.nojekyll` marker tells GitHub Pages to serve this as a plain static website rather than running Jekyll transforms.
