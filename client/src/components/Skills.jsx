import { BrainCircuit, Cloud, Server, Terminal } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ICONS = {
  languages: Terminal,
  "ai-vision": BrainCircuit,
  "web-backend": Server,
  "devops-cloud": Cloud,
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        index="01"
        eyebrow="Toolchain"
        title="What I build with"
        description="From model integration to deployment, the full path from idea to running system."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ id, category, items }) => {
          const Icon = ICONS[id] ?? Terminal;
          return (
            <div
              key={id}
              className="rounded-2xl border border-ink-700 bg-ink-850/80 p-5 transition hover:border-volt-400/40"
            >
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-volt-400">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {category}
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-ink-600 bg-ink-800 px-2.5 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}