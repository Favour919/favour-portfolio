import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { profile, roles } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";
import AvatarOrbit from "./AvatarOrbit";
import DotField from "./DotField";

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <div className="relative flex min-h-[calc(100vh-65px)] flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={16}
          bulgeStrength={55}
          glowRadius={180}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(242, 184, 7, 0.28)"
          gradientTo="rgba(79, 209, 197, 0.22)"
          glowColor="rgba(242, 184, 7, 0.4)"
        />
      </div>

      <header
        id="top"
        className="relative z-10 mx-auto grid w-full max-w-4xl flex-1 grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-8"
      >
      <div>
        <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold animate-pulse2" />
          </span>
          open to new opportunities
        </div>

        <p className="mb-2 font-mono text-sm text-dim">Hello, I'm</p>

        <h1 className="mb-4 bg-gradient-to-r from-gold via-ink to-mint bg-clip-text font-display text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <div className="mb-6 h-8 font-mono text-lg text-mint sm:text-xl">
          {typed}
          <span className="ml-0.5 inline-block h-5 w-[2px] -translate-y-0.5 animate-pulse bg-mint align-middle" />
        </div>

        <p className="mb-8 max-w-[52ch] text-[17px] leading-relaxed text-dim">
          {profile.tagline}
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-gold px-5 py-2.5 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-edge px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-gold"
          >
            Get in touch
          </a>
        </div>

        <div className="flex gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-dim transition-colors hover:border-gold hover:text-gold"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-dim transition-colors hover:border-gold hover:text-gold"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-dim transition-colors hover:border-gold hover:text-gold"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

        <AvatarOrbit />
      </header>

      <a
        href="#skills"
        aria-label="Scroll to technologies"
        className="relative z-10 mx-auto mb-8 flex h-9 w-9 animate-bounce items-center justify-center rounded-full border border-edge text-faint transition-colors hover:border-gold hover:text-gold"
      >
        <ChevronDown size={16} />
      </a>
    </div>
  );
}
