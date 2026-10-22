Vercel Deployed Link = https://sanya-portfolio-olive.vercel.app/



# Sanya Kulshrestha | AI Generalist Portfolio

A specialized, performance-focused portfolio built for the **AI Generalist (Design)** role at Ather Energy. This repository demonstrates full-stack engineering, workflow automation, and the technical infrastructure required to build tools for design teams.

Live Deployment: [https://sanya-portfolio-olive.vercel.app](https://sanya-portfolio-olive.vercel.app)

## Tech Stack

**Frontend (Client)
React 18 & Vite:Fast, component-based UI architecture.
Tailwind CSS v3: Custom industrial design system (utilizing custom `ink` and `volt` color palettes).
Lucide React: Clean, minimal icon set (with custom inline SVGs for brand assets).

**Backend (Server)
Node.js & Express.js:API routing and backend infrastructure (structured to support future full-stack scaling).

**Deployment & CI/CD
Vercel: Automated frontend deployment and hosting.
Git/GitHub: Version control and repository management.

## Repository Structure

This project uses a monorepo architecture:

* `/client`: Contains the React/Vite frontend. The UI reads from a structured data schema (`portfolio.js`) to cleanly separate content from components.
* `/server`: Contains the Node.js/Express backend environment. 

## Local Development

To run this project locally, clone the repository and start the development servers:

1. Clone the repository=
git clone [https://github.com/sanyak-1/Sanya_portfolio.git](https://github.com/sanyak-1/Sanya_portfolio.git)
cd Sanya_portfolio

2. Start the Frontend
cd client
npm install
npm run dev

3. Start the Backend (Optional)
cd server
npm install
npm run dev

Core Focus Areas Displayed=
Workflow Automation & CI/CD: Demonstrated through projects like FOLIO.
AI Pipeline Integration: RAG and OCR implementations (DocuMind).
Database Architecture: Relational data structures (NextStop).
Tooling Proposals: Concept architectures for VLM Asset Retrieval and Generative CMF Ideation.
