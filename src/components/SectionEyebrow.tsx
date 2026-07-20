type SectionEyebrowProps = {
  label: string;
  meta?: string;
};

export default function SectionEyebrow({  label, meta }: SectionEyebrowProps) {
  return (
    <div className="mb-10 flex justify-between items-center gap-4">
      <h2 className="whitespace-nowrap font-display text-xl font-semibold uppercase tracking-wide text-ink sm:text-2xl">
        {label}
      </h2>
      
      {meta && (
        <span className="whitespace-nowrap font-mono text-xs text-faint">
          {meta}
        </span>
      )}
    </div>
  );
}
