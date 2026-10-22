import { Layers, Palette, ScanSearch, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ICONS = {
  "vlm-retrieval": ScanSearch,
  "cmf-pipeline": Palette,
};

export default function AtherConcepts({ proposals }) {
  return (
    <section id="concepts" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        index="04"
        eyebrow="Concept proposals"
        title="Two tools I'd build for the design team"
        description="Unsolicited, but grounded in the pipelines I've already shipped. Each one targets a slow spot in a design workflow."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {proposals.map((p) => {
          const Icon = ICONS[p.id] ?? Sparkles;
          return (
            <article
              key={p.id}
              className="flex flex-col rounded-2xl border border-ink-700 bg-ink-850/80 p-6 transition hover:border-volt-400/40 hover:shadow-glow sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {p.label}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-volt-400/30 bg-volt-400/10 text-volt-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {p.title}
              </h3>

              <div className="mt-5">
                <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-volt-400">
                  Problem
                </p>
                <p className="text-sm leading-relaxed text-zinc-300">{p.problem}</p>
              </div>

              <div className="mt-5">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-volt-400">
                  Proposed approach
                </p>
                <ol className="space-y-2">
                  {p.approach.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-0.5 font-mono text-xs text-zinc-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5">
                <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-volt-400">
                  Outcome for designers
                </p>
                <p className="text-sm leading-relaxed text-zinc-300">{p.outcome}</p>
              </div>

              <div className="mt-6 flex items-start gap-2 rounded-lg border border-ink-700 bg-ink-900 px-3 py-2.5 text-xs text-zinc-400">
                <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-volt-400" aria-hidden="true" />
                <span>
                  <span className="text-zinc-500">Builds on: </span>
                  {p.buildsOn}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.title} tags`}>
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-ink-600 bg-ink-800 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}