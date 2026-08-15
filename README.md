```markdown
# Malik Saifullah — Portfolio Website

A premium, dark-themed personal portfolio built to showcase my experience, projects, and certifications as an AI Engineer and Backend Developer.

**Live site:** _(add your Vercel URL here once deployed)_

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?logo=framer)

---

## ✨ Features

- **Animated Hero** — custom portrait with parallax tilt, floating particles, and a rotating glow ring
- **Experience Timeline** — internships and volunteer work, pulled from a single structured data file
- **Featured Case Study** — a dedicated deep-dive page for my FlyRank AI backend internship, including an assignment-by-assignment breakdown
- **Certificates Gallery** — 20+ certifications with an image lightbox and live in-browser PDF preview
- **Projects Showcase** — shipped projects linking directly to their GitHub repositories
- **AI Chatbot** — a Groq-powered assistant embedded site-wide that answers visitor questions using my real portfolio data
- **Direct Contact Options** — one-tap WhatsApp chat (no API), email, and a contact form that opens a pre-filled email draft
- **Fully Responsive** — dedicated mobile bottom navigation for full page discoverability on phones
- **Custom Cursor & Micro-interactions** — smooth hover states, scroll-triggered reveals, and page transitions throughout

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Framework | Next.js 14 (App Router), TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| AI Chatbot | Groq API (Llama 3.3 70B) |
| PDF Rendering | react-pdf |
| Deployment | Vercel |

## 📁 Project Structure

```
src/
├── app/               # Pages (App Router) — Home, Experience, Certificates, Projects, Contact
├── components/        # UI components, organized by feature
├── data/              # All content — experience, projects, certificates, skills, site info
└── lib/                # Shared utilities
```

Content updates (new experience, projects, certificates) only require editing the relevant file in `src/data/` — no component code changes needed.

## 🚀 Getting Started

```bash
git clone https://github.com/saif098-bit/Portfolio.git
cd Portfolio
npm install
```

Create a `.env.local` file in the root:
```
GROQ_API_KEY=your_groq_api_key
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🌐 Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger an automatic deployment. Make sure `GROQ_API_KEY` is set under the project's Environment Variables in the Vercel dashboard.

## 📬 Contact

**Malik Saifullah**
BS Artificial Intelligence, University of Haripur

- Email: [saifullahmalik503@gmail.com](mailto:saifullahmalik503@gmail.com)
- GitHub: [@saif098-bit](https://github.com/saif098-bit)
- LinkedIn: [saifullah-ai-enginner](https://www.linkedin.com/in/saifullah-ai-enginner/)

---

<p align="center">Built and designed by Malik Saifullah</p>
```