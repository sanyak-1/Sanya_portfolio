import {
  BatteryCharging,
  Code2,
  Download,
  GraduationCap,
} from "lucide-react";

// Inline SVG components ensure zero export/build issues across different lucide-react versions
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

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIALS = [
  { key: "github", label: "GitHub", icon: GithubIcon },
  { key: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
  { key: "leetcode", label: "LeetCode", icon: Code2 },
];

export default function Hero({ personalInfo, links }) {
  const {
    name,
    role,
    status,
    headline,
    summary,
    education,
    highlights,
    resumeUrl,
    resumeFileName,
  } = personalInfo;

  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-volt-400/30 bg-volt-400/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-volt-300">
        <BatteryCharging className="h-3.5 w-3.5" aria-hidden="true" />
        {status}
      </span>

      <p className="font-mono text-sm uppercase tracking-widest text-zinc-500">
        {role}
      </p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tightest text-white sm:text-7xl">
        {name}
      </h1>
      <p className="mt-6 max-w-2xl text-balance text-xl text-zinc-200 sm:text-2xl">
        {headline}
      </p>
      <p className="mt-4 max-w-2xl text-zinc-400">{summary}</p>

      <div className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-zinc-400">
        <GraduationCap className="h-4 w-4 text-volt-400" aria-hidden="true" />
        <span>
          {education.degree}, {education.institution}{" "}
          <span className="font-mono text-zinc-500">({education.period})</span>
        </span>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={resumeUrl || "#"}
          download={resumeFileName || "Sanya_Kulshrestha_Resume.pdf"}
          className="inline-flex items-center gap-2 rounded-lg bg-volt-400 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-volt-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Resume
        </a>

        <div className="flex items-center gap-2">
          {SOCIALS.map(({ key, label, icon: Icon }) => (
            <a
              key={key}
              href={links?.[key] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile`}
              title={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-700 bg-ink-850/80 text-zinc-400 transition hover:border-volt-400/50 hover:text-volt-300 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-400"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-700 bg-ink-700 sm:grid-cols-4">
        {highlights?.map(({ value, label }) => (
          <div key={label} className="bg-ink-900 px-5 py-4">
            <dd className="font-mono text-2xl font-medium text-volt-400">{value}</dd>
            <dt className="mt-1 text-xs text-zinc-500">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}