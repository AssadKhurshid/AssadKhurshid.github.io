# Assad Khurshid — Portfolio Website

A clean, recruiter-focused static portfolio site.
No build tools. No frameworks. Just HTML, CSS, JS.

---

## Folder Structure

```
portfolio-assad/
├── index.html          ← Main page (all content here)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Scroll animations, nav, form
└── assets/
    ├── Assad_Khurshid_Resume.pdf   ← ★ ADD YOUR RESUME HERE
    └── photo.jpg                   ← ★ OPTIONAL: your headshot
```

---

## Before You Deploy — Checklist

### 1. Add your resume
Copy your PDF into the `assets/` folder and name it exactly:
```
Assad_Khurshid_Resume.pdf
```

### 2. Set up the contact form (5 minutes)
1. Go to https://formspree.io
2. Sign up for free
3. Click "New Form" → give it a name
4. Copy your Form ID (looks like: `xpwzgbko`)
5. Open `index.html` and find this line (~line 340):
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Replace `YOUR_FORM_ID` with your actual ID

### 3. Optional: Add your photo
- Drop a square photo named `photo.jpg` into `assets/`
- In `index.html`, find the About section and uncomment the image tag

---

## Deployment Options

### OPTION A — Netlify (Recommended, Free, 2 minutes)
1. Go to https://netlify.com → Sign up free
2. Click "Add new site" → "Deploy manually"
3. Drag your entire `portfolio-assad/` folder onto the page
4. Your site is live at a random URL like `https://random-name.netlify.app`
5. To use a custom domain: Site settings → Domain management → Add custom domain

### OPTION B — Namecheap cPanel Hosting
1. Log into your Namecheap account
2. Go to "Hosting List" → Click "cPanel" next to your plan
3. In cPanel, click "File Manager"
4. Navigate to `public_html/`
5. Click "Upload" → Upload ALL files maintaining folder structure:
   - `index.html` (root of public_html)
   - `css/style.css`
   - `js/main.js`
   - `assets/Assad_Khurshid_Resume.pdf`
6. Done. Visit your domain — it's live.

### OPTION C — GitHub Pages (Free)
1. Create a new GitHub repo named: `yourusername.github.io`
2. Push all files to the `main` branch
3. Go to Settings → Pages → Source: main branch
4. Your site is live at `https://yourusername.github.io`

---

## Customization Guide

| What to change | Where |
|---|---|
| Hero headline | `index.html` → `<h1>` tag |
| Status badge text | `index.html` → `.hero-tag` div |
| Add a new project | Copy a `.project-card` block, update content |
| Stats numbers | `index.html` → `.hero-stats` section |
| Accent color | `css/style.css` → `--accent: #63d2be;` |
| Font | `css/style.css` + update Google Fonts link in `<head>` |
| Add headshot | `assets/photo.jpg` + add `<img>` in About section |

---

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS
- Google Fonts: Syne + DM Mono + DM Sans
- Zero npm dependencies
- Zero build steps
- Loads in < 1s on any connection
