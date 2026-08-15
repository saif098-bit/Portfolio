# Malik Saifullah — AI Engineer Portfolio

A premium, dark-themed personal portfolio website built to showcase my experience, projects, certifications, technical skills, and work as an **AI Engineer and Backend Developer**.

The portfolio combines a modern visual experience with smooth animations, interactive components, an AI-powered chatbot, certificate verification, project showcases, and responsive navigation.

**Live Site:** `https://your-vercel-domain.vercel.app`

---

## ✨ Features

* **Animated Hero Section**

  * Custom professional portrait
  * Parallax and mouse interactions
  * Floating particles
  * Rotating glow effects
  * Smooth entrance animations
  * Interactive typography and micro-interactions

* **Experience Timeline**

  * Structured experience and internship timeline
  * Internship descriptions
  * Responsibilities and technologies
  * Data-driven experience management

* **Featured Case Study**

  * Dedicated FlyRank AI backend internship case study
  * Assignment-by-assignment breakdown
  * Technologies and implementation details
  * Development stages and outcomes

* **Certificates Gallery**

  * 20+ professional certifications
  * Certificate thumbnails
  * Interactive image lightbox
  * Live PDF preview
  * Certificate verification links
  * Responsive certificate grid

* **Projects Showcase**

  * Selected development and AI projects
  * Project descriptions
  * Technology stack
  * GitHub repository links
  * Interactive project cards

* **AI Portfolio Assistant**

  * Groq-powered AI chatbot
  * Uses real portfolio information
  * Answers visitor questions about:

    * Experience
    * Projects
    * Skills
    * Certifications
    * Education
    * Internship experience
    * Contact information
  * Available throughout the website

* **Direct Contact Options**

  * WhatsApp contact button
  * Email contact
  * Contact form
  * Pre-filled email functionality

* **Responsive Design**

  * Desktop optimized
  * Tablet support
  * Mobile-first responsive layouts
  * Dedicated mobile bottom navigation

* **Custom Cursor**

  * Smooth custom cursor
  * Interactive hover states
  * Cursor transformations
  * Desktop-only behavior for better mobile performance

* **Micro-interactions**

  * Scroll-triggered animations
  * Hover effects
  * Page transitions
  * Motion-based UI elements
  * Smooth section reveals

* **Premium Dark UI**

  * Modern dark visual system
  * Glassmorphism-inspired components
  * Gradient lighting
  * Animated backgrounds
  * High-contrast typography

---

## 🛠️ Tech Stack

| Category        | Technology      |
| --------------- | --------------- |
| Framework       | Next.js 16      |
| Architecture    | App Router      |
| Language        | TypeScript      |
| Styling         | Tailwind CSS v4 |
| Animation       | Framer Motion   |
| Icons           | Lucide React    |
| AI Chatbot      | Groq API        |
| AI Model        | Llama 3.3 70B   |
| PDF Rendering   | react-pdf       |
| Package Manager | npm             |
| Version Control | Git & GitHub    |
| Deployment      | Vercel          |

---

## 📁 Project Structure

```text
portfolio/
│
├── public/
│   ├── certificates/
│   │   ├── certificate-01.jpg
│   │   ├── certificate-02.jpg
│   │   └── ...
│   │
│   ├── projects/
│   │   ├── project-01.png
│   │   └── ...
│   │
│   ├── resume/
│   │   └── resume.pdf
│   │
│   ├── images/
│   │   └── profile.png
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts
│   │   │
│   │   ├── certificates/
│   │   │   └── page.tsx
│   │   │
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   │
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   │
│   │   ├── case-study/
│   │   │   └── flyrank/
│   │   │       └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── hero/
│   │   ├── experience/
│   │   ├── certificates/
│   │   ├── projects/
│   │   ├── chatbot/
│   │   ├── navigation/
│   │   ├── cursor/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── experience.ts
│   │   ├── certificates.ts
│   │   ├── projects.ts
│   │   └── portfolio.ts
│   │
│   ├── lib/
│   │   ├── groq.ts
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── .env.local
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saif098-bit/your-portfolio-repository.git
```

Navigate into the project:

```bash
cd your-portfolio-repository
```

---

### 2. Install Dependencies

Using npm:

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key
```

Replace:

```text
your_groq_api_key
```

with your actual Groq API key.

> **Important:** Never commit `.env.local` or expose your API key in client-side code.

---

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🤖 AI Chatbot

The portfolio includes an AI-powered assistant designed specifically for answering questions about my professional profile.

The chatbot uses the **Groq API** with the **Llama 3.3 70B** model.

### Capabilities

Visitors can ask questions such as:

```text
What technologies does Malik use?
```

```text
Tell me about his FlyRank internship.
```

```text
What AI projects has he built?
```

```text
What certifications does he have?
```

```text
How can I contact Malik?
```

The assistant responds using the portfolio's structured information rather than relying on generic answers.

### Architecture

```text
Visitor
   │
   ▼
Chat Interface
   │
   ▼
Next.js API Route
   │
   ▼
Groq API
   │
   ▼
Llama 3.3 70B
   │
   ▼
Portfolio Context
   │
   ▼
AI Response
```

The API key remains server-side through the Next.js API route.

---

## 📜 Certificates

The certificate section is designed to make professional certifications easy to explore and verify.

Each certificate can contain:

```ts
{
  title: "Certificate Title",
  issuer: "Issuing Organization",
  date: "2026",
  image: "/certificates/certificate.jpg",
  pdf: "/certificates/certificate.pdf",
  verificationUrl: "https://example.com/verify"
}
```

Visitors can:

* View certificate thumbnails
* Open certificates in a lightbox
* Preview PDF certificates
* Open official verification pages

---

## 💼 Experience

Experience information is maintained through structured data instead of being hardcoded throughout the UI.

Example:

```ts
{
  company: "Company Name",
  role: "Backend Developer Intern",
  duration: "2026",
  description: "Description of the experience",
  technologies: [
    "Python",
    "FastAPI",
    "Supabase",
    "PostgreSQL"
  ]
}
```

This makes it easier to add, remove, or update experience entries without modifying the UI components.

---

## 🚀 Projects

The Projects section highlights selected development, AI, backend, and software engineering projects.

Each project can include:

```ts
{
  title: "Project Name",
  description: "Project description",
  technologies: [
    "Python",
    "FastAPI",
    "Next.js"
  ],
  github: "https://github.com/username/repository",
  image: "/projects/project.png"
}
```

Projects are linked directly to their GitHub repositories where available.

---

## 📄 Resume

A dedicated resume section allows visitors to view the latest resume.

The resume can be placed inside:

```text
public/resume/resume.pdf
```

Visitors can then access the resume directly from the portfolio.

### Updating the Resume

Replace the existing PDF with the latest version while keeping the same filename:

```text
public/resume/resume.pdf
```

This allows the website to continue using the same resume path.

---

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

On mobile devices, the website includes a dedicated bottom navigation system to make the main sections easily accessible.

The interface adapts animations and interactions depending on the device to maintain a smooth experience.

---

## 🎨 Design Philosophy

The website follows a premium dark-themed visual direction focused on:

* Minimalism
* Strong typography
* Depth
* Motion
* Glass-like surfaces
* Subtle gradients
* Interactive elements
* Professional presentation

The goal is to create a portfolio that feels more like a **digital product experience** than a traditional static resume website.

---

## ⚡ Performance

Performance considerations include:

* Next.js App Router
* Optimized component rendering
* Responsive image handling
* Server-side API routes
* Conditional cursor effects
* Reusable components
* Data-driven content
* Minimal client-side logic where possible

Animations are designed to enhance the experience without interfering with usability.

---

## 🔐 Security

The project follows basic security practices including:

* API keys stored in environment variables
* Server-side handling of Groq API requests
* `.env.local` excluded from Git
* No API secrets exposed to the browser

Never commit secrets such as:

```text
GROQ_API_KEY
```

to a public repository.

---

## 🌐 Deployment

The portfolio is optimized for deployment on **Vercel**.

### Deploy with Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the project.

Add the following environment variable in Vercel:

```text
GROQ_API_KEY
```

After deployment, Vercel will provide a production URL.

---

## 🔧 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm start
```

Starts the production server.

### Lint

```bash
npm run lint
```

Runs the project's ESLint checks.

---

## 🧩 Customization

Most portfolio content is separated from the UI so it can be updated easily.

### Update Experience

Edit:

```text
src/data/experience.ts
```

### Update Projects

Edit:

```text
src/data/projects.ts
```

### Update Certificates

Edit:

```text
src/data/certificates.ts
```

### Update Portfolio Information

Edit:

```text
src/data/portfolio.ts
```

### Update Images

Place new assets inside:

```text
public/
```

---

## 📬 Contact

Visitors can connect with me through:

* **WhatsApp**
* **Email**
* **Contact Form**
* **GitHub**
* **LinkedIn**

### GitHub

https://github.com/saif098-bit

### LinkedIn

https://www.linkedin.com/in/saifullah-ai-enginner/

---

## 👨‍💻 About Me

I'm **Malik Saifullah**, an Artificial Intelligence student focused on building practical solutions across:

* Artificial Intelligence
* Machine Learning
* Backend Development
* Computer Vision
* Intelligent Systems
* API Development
* Automation

I enjoy turning ideas into functional software and continuously exploring modern AI and backend technologies.

---

## 📌 Featured Work

Some of the projects and work showcased through this portfolio include:

* AI-powered applications
* Backend APIs
* Intelligent systems
* Smart automation solutions
* Computer vision projects
* Scheduling systems
* Internship assignments
* AI-assisted applications

For the complete list, visit the Projects section of the portfolio.

---

## 📈 Future Improvements

Planned improvements may include:

* [ ] More interactive 3D elements
* [ ] Advanced AI portfolio assistant
* [ ] Improved project case studies
* [ ] More detailed analytics
* [ ] Additional accessibility improvements
* [ ] Enhanced page transition system
* [ ] More AI-powered portfolio features

---

## ⭐ Support

If you find this portfolio useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for personal portfolio and demonstration purposes.

Unless otherwise stated, the content, personal branding, certificates, images, and portfolio materials belong to **Malik Saifullah** and should not be reused without permission.

---

## 👤 Author

**Malik Saifullah**

**AI Engineer | Backend Developer**

Artificial Intelligence • Machine Learning • Backend Development • Intelligent Systems

GitHub:
https://github.com/saif098-bit

LinkedIn:
https://www.linkedin.com/in/saifullah-ai-enginner/

---

<p align="center">
  Built with Next.js, TypeScript, Tailwind CSS, Framer Motion & AI
</p>

<p align="center">
  © 2026 Malik Saifullah. All rights reserved.
</p>
