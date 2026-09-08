# Mahmud Ahmadiyya College (MACI) — Official Website

Official website for **Mahmud Ahmadiyya College**, Ijede, Ikorodu, Lagos State, Nigeria.
An Islamic co-educational school established **May 1994**, committed to "Excellence in Education, Character in Action."

**Live site:** https://mahmudcollege.edu.ng

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Icons:** lucide-react
- **Forms:** react-hook-form

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (port 3005)
npm run dev

# 3. Production build
npm run build
npm run start
```

Open [http://localhost:3005](http://localhost:3005) to view the site.

## Project Structure

```
app/          # App Router pages (home, about, gallery, contact, exams)
components/   # Feature components (home, about, gallery, contact, exams, layout)
hooks/        # Custom React hooks (scroll animation, media query, counter)
lib/          # Utilities
public/MACI/  # Static images
```

## Pages

| Route      | Description                          |
| ---------- | ------------------------------------ |
| `/`        | Home / landing page                  |
| `/about`   | School history, mission, values      |
| `/gallery` | Photo gallery with lightbox          |
| `/contact` | Contact form, info & map             |
| `/exams`   | Exams & records, FAQ, staff portal   |

## SEO

- Custom domain **mahmudcollege.edu.ng** is configured on Vercel
- `app/sitemap.ts` and `app/robots.ts` auto-generate `sitemap.xml` & `robots.txt`
- JSON-LD `EducationalOrganization` structured data is injected in `app/layout.tsx`
- Verified in **Google Search Console** for the custom domain

## License

All rights reserved. © Mahmud Ahmadiyya College, Ijede.
