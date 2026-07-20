import { technologies } from "../data";
import SectionEyebrow from "./SectionEyebrow";
import LogoLoop from "./LogoLoop";
import type { LogoItem } from "./LogoLoop";

const mid = Math.ceil(technologies.length / 2);
const rowOne = technologies.slice(0, mid);
const rowTwo = technologies.slice(mid);

function toLogos(items: typeof technologies): LogoItem[] {
  return items.map(({ name, Icon, color }) => ({
    node: <Icon size={40} style={{ color }} />,
    title: name,
    ariaLabel: name,
  }));
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-edge py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionEyebrow  label="Technologies" meta="stack --loop" />
      </div>

      <div className="flex w-full flex-col gap-8 overflow-hidden">
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={toLogos(rowOne)}
            speed={45}
            direction="left"
            logoHeight={40}
            gap={56}
            fadeOut
            fadeOutColor="#0F1B1E"
            scaleOnHover
            ariaLabel="Technologies, row one"
          />
        </div>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={toLogos(rowTwo)}
            speed={45}
            direction="right"
            logoHeight={40}
            gap={56}
            fadeOut
            fadeOutColor="#0F1B1E"
            scaleOnHover
            ariaLabel="Technologies, row two"
          />
        </div>
      </div>
    </section>
  );
}
