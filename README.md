# DenDoc Dental — Website Files

## Files in this package
```
index.html      → page structure
css/style.css    → all styling
js/script.js     → all interactivity
```

## ⚠️ Important — how to upload these to GitHub correctly

Drag-and-drop of a whole folder into GitHub's web uploader does NOT always
preserve the `css/` and `js/` subfolders — this is what caused the broken
site last time. Use this method instead, it's guaranteed to work:

### Method: Create each file by typing its full path

1. Open your GitHub repo → click **Add file → Create new file**
2. In the "Name your file" box, do NOT just type `index.html`.
   Instead, for each file below, type the **exact path shown**
   (GitHub will automatically create the folder for you when you
   type a `/` in the filename box):

   - File 1 → type filename as: `index.html`
     → paste the contents of `index.html` → commit
   - File 2 → type filename as: `css/style.css`
     → paste the contents of `css/style.css` → commit
     (GitHub will create the `css` folder automatically)
   - File 3 → type filename as: `js/script.js`
     → paste the contents of `js/script.js` → commit
     (GitHub will create the `js` folder automatically)

3. After all 3 files are committed, go to **Settings → Pages**,
   set Source to your main branch, `/ (root)`, and Save.
4. Visit `https://<your-username>.github.io/<repo-name>/`
   (wait 1–2 minutes, then hard-refresh: Ctrl+Shift+R)

### How to verify it worked
Right-click the live page → **View Page Source**. You should see:
```html
<link rel="stylesheet" href="css/style.css">
```
near the top, and:
```html
<script src="js/script.js"></script>
```
near the bottom. If you see a big `<style>` block instead, you're
looking at the old single-file version — re-upload following the
steps above.

## If this still causes problems
Skip the folder structure entirely — ask for the single self-contained
`index.html` version instead (everything in one file, nothing to break).
This is the safest option if you keep running into upload issues.

## Before going fully live, update in index.html:
- WhatsApp number and phone numbers (Contact section + footer)
- Email address
- Doctor photos and testimonial avatars (currently placeholder portraits)
