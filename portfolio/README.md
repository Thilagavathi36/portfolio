# M Thilagavathi: Data Engineer Portfolio

Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm start
```

Requires Node 18.18 or newer (Node 20 recommended; see `.nvmrc`).

## Where to edit content

All content lives in `data/`, so you never need to touch components to change text.

| File | What it controls |
| --- | --- |
| `data/profile.ts` | Name, hero text, email, LinkedIn, GitHub, resume path, About facts, education, awards |
| `data/skills.ts` | Skill groups and each skill's level (`professional`, `project`, `learning`) |
| `data/projects.ts` | The five projects: summary, highlights, challenges, `repoUrl` |
| `data/experience.ts` | Experience timeline |

The hero photo is `public/images/thilagavathi.jpg`. Replace the file to change it.

### Before publishing

1. Replace `public/resume/M_Thilagavathi_Resume.pdf` with your Data Engineering resume.
2. Add `repoUrl: "https://github.com/..."` to each project in `data/projects.ts`; a Repository button appears automatically.
3. Check each skill's level in `data/skills.ts`.
4. Set `NEXT_PUBLIC_SITE_URL` to your live URL.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify choose **Add new project → Import an existing project → GitHub**, then pick the repository.
3. Leave the build settings as detected. Netlify recognizes Next.js and `netlify.toml` already sets the build command and Node version.
4. Before deploying, open **Environment variables** and add `NEXT_PUBLIC_SITE_URL` with your Netlify URL (you can set it after the first deploy, then redeploy).
5. Click **Deploy**. Every push to the main branch redeploys automatically.
6. Optional: **Project configuration → Domain management** lets you change the default `*.netlify.app` name to something cleaner, such as `thilagavathi.netlify.app`.

CLI alternative:

```bash
npm i -g netlify-cli
netlify login
netlify init      # link or create the project from this folder
netlify deploy --build --prod
```

## Structure

```
app/             layout, home page, OG image, sitemap, robots
components/      Nav, Hero, HeroPhoto, About, Expertise, Projects, Experience, Education, Contact, Footer
data/            typed content
public/          resume, hero photo, project asset folders
```

## Accessibility and performance

- Semantic landmarks, skip link, visible focus states, keyboard-operable filters and expandable sections.
- Reduced-motion support: reveal animations and the flow-line animation are disabled.
- Static generation; Geist fonts are bundled locally, with no external font requests.
