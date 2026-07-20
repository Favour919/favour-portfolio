import { GraduationCap, Briefcase } from "lucide-react";
import { journey } from "../data";
import SectionEyebrow from "./SectionEyebrow";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-edge py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionEyebrow  label="Journey" meta="2018 — present" />

        <div className="relative pl-7">
          <div className="absolute bottom-1 left-[9px] top-1 w-px bg-edge" />
          {journey.map((item) => {
            const Icon = item.kind === "education" ? GraduationCap : Briefcase;
            return (
              <div key={item.id} className="relative pb-10 last:pb-0">
                <span className="absolute -left-7 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-gold bg-bg text-gold">
                  <Icon size={10} />
                </span>
                <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
                  <span className="font-semibold text-ink">{item.title}</span>
                  <span className="text-dim">— {item.org}</span>
                  <span className="ml-auto font-mono text-xs text-faint">
                    {item.period}
                  </span>
                </div>
                {item.location && (
                  <p className="mb-1 font-mono text-xs text-faint">
                    {item.location}
                  </p>
                )}
                {item.points && (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-dim">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
