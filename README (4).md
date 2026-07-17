# DenDoc Dental — Multi-Page Website

## Structure
```
project/
├── index.html         → Home (hero, why choose us, testimonials)
├── about.html          → About, Specialists, Smile Gallery
├── services.html       → Services grid, Technology showcase
├── contact.html        → Appointment form, FAQ, Contact & map
├── css/
│   └── style.css        → all styling (shared by every page)
├── js/
│   └── script.js         → all interactivity (shared by every page)
├── images/               → (empty — see note below)
└── README.md
```

## Which file to open first
**`index.html`** is the homepage — open that first in your browser to view the site,
and it's what GitHub Pages will serve automatically at your root URL.

## About the `images/` folder
This build uses hotlinked photos (Unsplash + randomuser.me placeholder portraits)
directly in the HTML `src=` attributes rather than local files, so `images/` is
currently empty. This keeps the project lightweight and avoids broken paths.
If you want fully local images instead:
1. Download the photos you want to keep from the URLs in `index.html`,
   `about.html`, etc.
2. Save them into `images/` (e.g. `images/hero-bg.jpg`)
3. Replace the matching `src="https://images.unsplash.com/..."` with
   `src="images/hero-bg.jpg"` in the HTML

## ⚠️ Deploying to GitHub Pages correctly

Drag-and-drop folder uploads on GitHub's web interface don't always preserve
subfolders — this has caused broken (unstyled) deployments before. Use one
of these two reliable methods instead:

### Method A — Recommended: GitHub Desktop or `git` command line
1. Clone/create your repo locally
2. Copy all files from this project into the repo folder, **keeping the
   `css/` and `js/` folders exactly as they are**
3. `git add .` → `git commit -m "Deploy DenDoc site"` → `git push`
4. This is the most reliable method — no folder-flattening risk

### Method B — GitHub web interface (Add file → Create new file)
Do this once per file, typing the **full path** in the filename box each time
(GitHub auto-creates folders when it sees a `/`):
1. `index.html` → paste contents → commit
2. `about.html` → paste contents → commit
3. `services.html` → paste contents → commit
4. `contact.html` → paste contents → commit
5. `css/style.css` → paste contents → commit (creates the `css` folder)
6. `js/script.js` → paste contents → commit (creates the `js` folder)

### Enable GitHub Pages
1. Repo → **Settings → Pages**
2. Source: your main branch, `/ (root)`
3. Save, wait 1–2 minutes
4. Visit `https://<your-username>.github.io/<repo-name>/`

### Verify it deployed correctly
Right-click the live homepage → **View Page Source**. Near the top you should see:
```html
<link rel="stylesheet" href="css/style.css">
```
and near the bottom:
```html
<script src="js/script.js"></script>
```
If instead you see a huge inline `<style>` block, you're looking at an old
cached/different file — re-check what's actually in the repo.

## Before going fully live, update:
- WhatsApp number and phone numbers (`contact.html` + every page's footer)
- Email address (`contact.html`)
- Doctor photos and testimonial avatars (`js/script.js` — currently placeholder portraits from randomuser.me)
- Clinic address (`contact.html`) and the embedded map coordinates
