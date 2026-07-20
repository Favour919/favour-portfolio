import { Award } from "lucide-react";
import { certificates } from "../data";
import SectionEyebrow from "./SectionEyebrow";

export default function Certificates() {
  return (
    <section className="border-t border-edge py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionEyebrow
          label="Certificates"
          meta={`${certificates.length} earned`}
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {certificates.map((c) => (
            <div
              key={c}
              className="flex items-center gap-3 rounded-xl border border-edge bg-surface p-5"
            >
              <Award size={18} className="shrink-0 text-mint" />
              <span className="text-sm text-ink">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
