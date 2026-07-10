# Akash Singh — Portfolio

Updated July 2026.

## Files
- `index.html` — page structure and all text content
- `css/style.css` — all styling (accent colours are at the very top, in `:root`)
- `js/script.js` — theme toggle, typing animation, scroll reveal, skill bars, mobile menu
- `images/akash.jpg` — your photo
- `Akash_Singh_Resume.pdf` — your current résumé (the "Download CV" button links here)

## What changed in this update
- **Portfolio section** now shows the real **Posture Expert** project (was "coming soon")
- **New Experience section** — the Tech Sarthi internship, with a timeline
- **New Certifications block** — Kaggle Python, TechSharthi, Cisco IT Essentials
- **Skills rebuilt** — Python, MediaPipe, OpenCV & NumPy, Streamlit, HTML/CSS, JavaScript, C, Machine Learning
- **Links fixed** — GitHub now points to github.com/akashhsinghh (was a Google share link);
  LinkedIn updated to linkedin.com/in/aakashhsinghh; Kaggle profile added
- **Email updated** to akashhsinghh.cse@gmail.com
- **Résumé replaced** with the current version
- **Bio, tags and stats** rewritten to reflect the deployed app

## Run it locally
1. Open VS Code → File → Open Folder → select `akash-portfolio`.
2. Quickest: right-click `index.html` → Open with Chrome.
3. Better: install the **Live Server** extension → right-click `index.html` → "Open with Live Server".
   The page then auto-refreshes every time you save.

## Edit it
- **Text** → `index.html`
- **Colours / spacing** → `css/style.css` (the `--accent` and `--accent-2` variables at the top)
- **Typing roles** → the `roles` array near the top of `js/script.js`
- **Photo** → replace `images/akash.jpg` (keep the same filename)
- **Résumé** → replace `Akash_Singh_Resume.pdf` (keep the same filename)

## Make the contact form actually work
It currently shows a confirmation but sends nothing. To receive messages by email:
1. Sign up free at **formspree.io** and create a form — you'll get an endpoint URL.
2. In `index.html`, change `<form class="reveal d2" id="contactForm">` to:
   `<form class="reveal d2" id="contactForm" action="YOUR_FORMSPREE_URL" method="POST">`
3. Add a `name` attribute to each input, e.g. `name="email"`, `name="message"`.
4. Delete the `contact()` block in `js/script.js` so the browser submits normally.

## To do
- Add screenshots of Posture Expert to the project card for extra impact.
- Update the résumé PDF whenever you update the résumé itself.
