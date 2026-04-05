# Resume

A single-page resume webpage built with Next.js (App Router) and styled entirely with Tailwind CSS utility classes.

## How to Run Locally
```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- [x] Next.js project scaffolded with App Router and Tailwind CSS
- [x] All resume content written as JSX in `src/app/page.js`
- [x] Real, complete resume information (no placeholder text)
- [x] Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- [x] Logical heading hierarchy (`<h1>` for name, `<h2>` for sections, `<h3>` for entries)
- [x] All styling done with Tailwind CSS utility classes via `className`
- [x] No custom CSS rules in `globals.css`
- [x] Clean, readable layout at desktop viewport
- [x] Accessible links with descriptive labels
- [x] No console errors
- [x] Default boilerplate cleaned up

## Sections Included

- Name, contact info, and professional summary
- Education
- Technical Skills and Certifications
- Work Experience
- Leadership and Involvement
- Volunteering
- Interests

## Known Issues / Limitations

- Layout is optimized for desktop viewports; not fully responsive on mobile
- No dark mode support