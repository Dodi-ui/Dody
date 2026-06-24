# Daniel Esshak — Personal Portfolio

> **"I don't need the solo. I want the song to work."**

Personal portfolio website for Daniel Esshak Asaad — 17-year-old CS student from Qena, Egypt. Engineer, musician, and builder applying to top US universities (Colgate ED, Cornell, Carleton, Minerva, Haverford).

---

## Stack

- Pure HTML5 + Vanilla CSS + Vanilla JS (no build step)
- GSAP 3 + ScrollTrigger (CDN)
- Google Fonts: Cormorant Garamond, Inter, JetBrains Mono
- Contact form: Formspree (see setup below)

## File Structure

```
/
├── index.html          ← Main single-page site
├── style.css           ← All styles (dark + light mode)
├── script.js           ← Animations, cursor, particles, form
├── daniel_portrait.png ← Hero + footer portrait
├── qena_night.png      ← Hero & story background
├── music_atmosphere.png← Music section background
└── README.md
```

## Running Locally

Just open `index.html` in any modern browser — no build needed.

```bash
# Or use a simple local server (avoids CORS on fonts)
npx serve .
# or
python -m http.server 8080
```

## Contact Form Setup (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy your Form ID (e.g. `xpwzkvbg`)
3. Open `script.js` → find this line:
   ```js
   const ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
   ```
4. Replace `YOUR_FORMSPREE_ID` with your actual ID:
   ```js
   const ENDPOINT = 'https://formspree.io/f/xpwzkvbg';
   ```
5. Done — form submissions go straight to your email.

**Until that's set**, the form falls back to opening a `mailto:` link so nothing is broken.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Source: **Deploy from branch** → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name/`

### Custom Domain (optional)
- Buy `danielesshak.com` on Namecheap / Google Domains
- Add a `CNAME` file with just: `danielesshak.com`
- Point your domain's DNS to GitHub Pages

## Features

- 🎯 TAK.TAK.TAK loading screen with progress bar
- 🖱️ Custom gold cursor with magnetic follower
- ✨ Canvas particle field (star-over-desert effect)
- 📜 Smooth scroll-reveal animations (GSAP + IntersectionObserver)
- 🎨 Dark mode (default) + Light mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- 🏆 All 10 sections: Hero, About, Story, Projects, Music, Experience, Honors, Testimonials, Education, Contact
- 📊 Animated score bars + stat counters
- 🃏 3D tilt effect on project cards
- ♿ WCAG AA accessible (focus rings, semantic HTML, ARIA labels)
- 🔍 SEO: meta tags, Open Graph, JSON-LD structured data
- ⚡ No build step — instant load

---

© 2026 Daniel Esshak Asaad · Qena, Egypt
