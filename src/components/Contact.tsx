import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-edge py-20 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Let's build something.
        </h2>
        <p className="mb-8 text-dim">
          Open to entry-level and junior software engineering roles.
        </p>

        <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-edge bg-surface px-5 py-3 font-mono text-sm text-ink">
          <span className="h-3.5 w-[7px] animate-pulse bg-gold" />
          mail --to {profile.email}
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-dim">
          <span className="flex items-center gap-2">
            <Phone size={14} /> {profile.phone}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> {profile.location}
          </span>
        </div>

        <div className="flex justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-edge text-dim transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:border-gold"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-edge text-dim transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:border-gold"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-edge text-dim transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:border-gold"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
