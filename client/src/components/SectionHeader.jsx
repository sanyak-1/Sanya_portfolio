export default function SectionHeader({ index, eyebrow, title, description }) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-volt-400">
        <span className="text-zinc-600">{index} /</span> {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-balance text-zinc-400">{description}</p>
      )}
    </header>
  );
}