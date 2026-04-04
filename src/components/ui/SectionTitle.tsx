interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-[#0f2744] md:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-[#e8772e] ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
