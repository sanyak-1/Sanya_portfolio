export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sanya Kulshrestha",
    //role: "AI Generalist · Design Tooling",
    status: "AI Generalist (Design)",
    headline: "I build AI pipelines and automation that make design teams faster.",
    summary:
      "Computer science student and full-stack engineer who ships end-to-end systems: LLM and RAG pipelines, OCR and computer vision, containerized deployments with CI/CD. I like turning slow, manual workflows into tools people actually want to use.",
    resumeUrl: "https://drive.google.com/file/d/1noGFuesAbsSFtGOkSJXOKy7JTDAFaX-K/view?usp=drivesdk",
    resumeFileName: "Sanya_Kulshrestha_Resume.pdf",
    education: {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "S.R.M Institute of Science and Technology",
      period: "2023 – 2027",
      cgpa: "9.15",
      cgpaScale: "10.0",
    },
    highlights: [
      { value: "9.15", label: "CGPA / 10.0" },
      //{ value: "96.1%", label: "Plant disease detection accuracy" },
      { value: "4", label: "Industry certifications" },
      { value: "3", label: "Full-stack projects" },
    ],
  },

  // Swap these placeholders for your real URLs
  links: {
    github: "https://github.com/sanyak-1",
    linkedin: "https://www.linkedin.com/in/sanya-kulshrestha-70487528a/",
    leetcode: "https://leetcode.com/u/Sanya_Kulshrestha/",
    bookChapter: "https://www.igi-global.com/gateway/chapter/425651",
  },

  skills: [
    {
      id: "languages",
      category: "Languages",
      items: ["Python", "JavaScript", "C++", "SQL"],
    },
    {
      id: "ai-vision",
      category: "AI & Vision",
      items: ["LLM Integration", "RAG", "OCR", "OpenCV"],
    },
    {
      id: "web-backend",
      category: "Web & Backend",
      items: ["React.js", "FastAPI"],
    },
    {
      id: "devops-cloud",
      category: "DevOps & Cloud",
      items: ["Docker", "AWS EC2", "Jenkins CI/CD"],
    },
  ],

  projects: [
    {
      id: "folio",
      title: "FOLIO",
      subtitle: "Resume-to-Portfolio Generator",
      focus: "Workflow Automation & CI/CD",
      stack: ["React.js", "FastAPI", "MongoDB Atlas", "Docker", "AWS EC2", "Nginx", "Jenkins"],
      problem: "Turning a resume into a polished portfolio site is repetitive manual work, and every update means rebuilding and redeploying by hand.",
      solution: "A React front end talks to a FastAPI service that turns resume data into a portfolio, stored in MongoDB Atlas. The whole stack is containerized with Docker, served through Nginx on AWS EC2, and shipped by a Jenkins pipeline.",
      impact: "Resume in, live portfolio out. Every push goes through the same automated build-and-deploy path, so releases are repeatable instead of hand-rolled."
    },
    {
      id: "documind",
      title: "DocuMind",
      subtitle: "Accessible AI Document Assistant",
      focus: "AI Pipeline Integration & User-Centric Design",
      stack: ["Python", "Node.js", "OpenCV", "Tesseract OCR", "RAG", "Web Speech API"],
      problem:
        "Scanned and dense documents are hard to get through, especially for users who struggle with reading or visual access.",
      solution:
        "OpenCV cleans up the scan, Tesseract extracts the text, and a RAG layer answers questions grounded in the document. The Web Speech API adds voice input and spoken responses, with Node.js and Python stitching the stages together.",
      impact:
        "Several AI stages behave as one product: users ask a question out loud and get an answer from their own document, no manual reading required.",
      repoUrl: "https://github.com/sanyak-1/Documind_Sanya.git",
    },
    {
      id: "nextstop",
      title: "NextStop",
      subtitle: "Tour & Travel Booking Website",
      focus: "Database Design & Robust Backend Workflows",
      stack: ["Node.js", "SQL", "PostgreSQL"],
      problem:
        "Booking systems break down when availability, reservations and customer data fall out of sync.",
      solution:
        "A Node.js backend on a relational PostgreSQL schema, with SQL queries designed to keep bookings and inventory consistent.",
      impact:
        "A dependable data layer the rest of the product can trust, built around structured, predictable backend workflows.",
      repoUrl: "https://github.com/sanyak-1/NextStopTravel_Website.git",
    },
  ],

  achievements: {
    bookChapter: {
      title: "Agentic AI Framework for Multimodal Document Understanding",
      publisher: "IGI Global",
      type: "Book Chapter",
    },
    publication: {
      title: "UAS-based plant disease detection using deep learning",
      venue: "IEEE SCOPE 2025",
      type: "Research Publication",
      metric: "96.1%",
      metricLabel: "detection accuracy",
    },
    certifications: [
      { name: "GitHub Copilot", issuer: "GitHub" },
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
      { name: "AWS AI Practitioner", issuer: "Amazon Web Services" },
      { name: "SAP Gen AI", issuer: "SAP" },
    ],
  },

  atherProposals: [
    {
      id: "vlm-retrieval",
      label: "Concept 01",
      title: "VLM Design Asset Retrieval Engine",
      problem:
        "Years of legacy CAD files and renders pile up in folders, and designers lose time hunting for them by filename or memory.",
      approach: [
        "Generate preview renders for legacy CAD assets and index them alongside existing renders.",
        "Embed every asset with a vision-language model so images and text share one search space.",
        "Let designers search in plain language, for example 'matte rear panel with split seam', and get thumbnails that link back to the source file.",
      ],
      outcome:
        "Faster reuse of past design work and less rebuilding of things that already exist.",
      buildsOn: "RAG and OCR pipeline experience from DocuMind",
      tags: ["VLM", "Embeddings", "Vector Search", "CAD / Renders"],
    },
    {
      id: "cmf-pipeline",
      label: "Concept 02",
      title: "Generative CMF Ideation Pipeline",
      problem:
        "Exploring Color, Material and Finish options means slow manual re-rendering for every variation.",
      approach: [
        "Wrap a ComfyUI workflow in a simple web GUI so designers never have to touch the node graph.",
        "Expose palette, material and finish controls that generate batches of variations from a base render.",
        "Collect results in a gallery so the team can compare, shortlist and iterate quickly.",
      ],
      outcome:
        "Many CMF directions explored in the time it takes to produce a few by hand.",
      buildsOn: "Workflow automation and service architecture from FOLIO",
      tags: ["ComfyUI", "Generative AI", "CMF", "Workflow Tooling"],
    },
  ],
};