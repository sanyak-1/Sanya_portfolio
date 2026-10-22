import React from "react";

// Inline SVG to prevent lucide-react export errors
function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const { title, subtitle, focus, stack, problem, solution, impact, repoUrl } = project;

  return (
    <div className="group relative flex flex-col gap-6 rounded-2xl border border-ink-700 bg-ink-850/50 p-6 sm:p-8 transition hover:border-volt-400/30 hover:bg-ink-800/50">
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-1 font-mono text-sm text-volt-400">{subtitle} • {focus}</p>
        </div>
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-700 bg-ink-900 px-3 py-1.5 text-sm text-zinc-400 transition hover:border-volt-400/50 hover:text-volt-300"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Source</span>
          </a>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className="rounded-full bg-ink-900 px-3 py-1 text-xs text-zinc-300 border border-ink-700">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-2 space-y-4 text-sm text-zinc-400">
        <div>
          <strong className="text-zinc-200">The Friction: </strong> {problem}
        </div>
        <div>
          <strong className="text-zinc-200">The Solution: </strong> {solution}
        </div>
        <div>
          <strong className="text-volt-300">Impact: </strong> <span className="text-zinc-300">{impact}</span>
        </div>
      </div>
    </div>
  );
}