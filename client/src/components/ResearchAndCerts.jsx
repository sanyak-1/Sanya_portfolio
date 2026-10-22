import { Award, BadgeCheck, BookOpen, ExternalLink, FileText } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function ResearchAndCerts({ achievements, links }) {
  const { bookChapter, publication, certifications } = achievements;

  return (
    <section id="research" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        index="03"
        eyebrow="Research & credentials"
        title="Published work and certifications"
        description="Research that turned into real papers, plus the cloud and AI credentials behind the tooling."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="flex flex-col justify-between rounded-2xl border border-ink-700 bg-ink-850/80 p-6 transition hover:border-volt-400/40">
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-volt-400">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              {bookChapter.type}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {bookChapter.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{bookChapter.publisher}</p>
          </div>

          <a
            href={links.bookChapter}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-volt-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-volt-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-850"
          >
            Read Chapter
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>

        <article className="rounded-2xl border border-ink-700 bg-ink-850/80 p-6 transition hover:border-volt-400/40">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-volt-400">
            <FileText className="h-4 w-4" aria-hidden="true" />
            {publication.type}
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {publication.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400">{publication.venue}</p>

          <div className="mt-6 flex items-baseline gap-3 border-t border-ink-700 pt-5">
            <span className="font-mono text-4xl font-medium text-volt-400">
              {publication.metric}
            </span>
            <span className="text-sm text-zinc-500">{publication.metricLabel}</span>
          </div>
        </article>
      </div>

      <div className="mt-4 rounded-2xl border border-ink-700 bg-ink-850/80 p-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-volt-400">
          <Award className="h-4 w-4" aria-hidden="true" />
          Certifications
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map(({ name, issuer }) => (
            <li
              key={name}
              className="flex items-start gap-3 rounded-xl border border-ink-700 bg-ink-900 p-4"
            >
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-volt-400" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-zinc-100">{name}</p>
                <p className="text-xs text-zinc-500">{issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}