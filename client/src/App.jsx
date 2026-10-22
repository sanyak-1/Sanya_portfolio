import { PORTFOLIO_DATA } from "./data/portfolio";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SectionHeader from "./components/SectionHeader";
import ProjectCard from "./components/ProjectCard";
import ResearchAndCerts from "./components/ResearchAndCerts";
import AtherConcepts from "./components/AtherConcepts";

const { personalInfo, links, skills, projects, achievements, atherProposals } =
  PORTFOLIO_DATA;

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <main className="relative z-10">
        <Hero personalInfo={personalInfo} links={links} />
        <Skills skills={skills} />

        <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
          <SectionHeader
            index="02"
            eyebrow="Selected work"
            title="Systems I've designed and shipped"
            description="Each project is framed the way I'd pitch a tooling improvement: the problem, the technical fix, and what changed."
          />
          <div className="grid gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        <ResearchAndCerts achievements={achievements} links={links} />
        <AtherConcepts proposals={atherProposals} />
      </main>

      <footer className="relative z-10 border-t border-ink-700 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <nav aria-label="Profile links" className="flex items-center gap-5">
            {[
              ["GitHub", links.github],
              ["LinkedIn", links.linkedin],
              ["LeetCode", links.leetcode],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-volt-300"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}