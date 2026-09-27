interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) => {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${
            light ? "text-pink-300" : "text-pink-600"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 ${
            light ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;