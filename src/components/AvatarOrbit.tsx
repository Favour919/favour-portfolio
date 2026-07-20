import { Code2, Database, Braces, FileCode2 } from "lucide-react";

const badges = [
  { Icon: Code2, className: "left-[-14px] top-8 animate-float", delay: "0s" },
  { Icon: Database, className: "right-[-16px] top-16 animate-float", delay: "0.6s" },
  { Icon: Braces, className: "left-2 bottom-[-14px] animate-float", delay: "1.1s" },
  { Icon: FileCode2, className: "right-0 bottom-2 animate-float", delay: "1.7s" },
];

export default function AvatarOrbit() {
  return (
    <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
      {/* glowing blob backdrop */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-gold/25 via-mint/20 to-transparent blur-2xl animate-blob" />

      {/* dashed rotating ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-edge animate-spinSlow" />

      {/* avatar circle */}
      <div className="absolute inset-4 flex items-center justify-center rounded-full border border-edge bg-surface shadow-[0_0_60px_-15px_rgba(242,184,7,0.35)]">
        <span className="font-display text-5xl font-semibold text-ink">
          FB
        </span>
      </div>

      {/* floating tech badges */}
      {badges.map(({ Icon, className, delay }, i) => (
        <span
          key={i}
          className={`absolute flex h-11 w-11 items-center justify-center rounded-xl border border-edge bg-surface2 text-mint shadow-lg ${className}`}
          style={{ animationDelay: delay }}
        >
          <Icon size={18} />
        </span>
      ))}
    </div>
  );
}
