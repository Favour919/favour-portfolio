import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import SectionEyebrow from "./SectionEyebrow";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-edge py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionEyebrow
          label="Projects"
          meta={`${projects.length} projects`}
        />

        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-edge bg-surface p-6 transition-colors hover:border-gold"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
                  {p.name}
                  <ArrowUpRight size={16} className="text-faint" />
                </div>
                <span className="font-mono text-xs text-faint">
                  {p.role} · {p.period}
                </span>
              </div>
              <p className="mb-4 max-w-[62ch] text-sm leading-relaxed text-dim">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-edge px-2.5 py-1 font-mono text-xs text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
