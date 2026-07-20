import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-6">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 font-mono text-xs text-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>built with React + TypeScript + Tailwind</span>
      </div>
    </footer>
  );
}
