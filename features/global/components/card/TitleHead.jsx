export default function TitleHead({
  title,
  subtitle,
  className = "",
  titleClass = "",
  subtitleClass = "",
}) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-gray-600 ${subtitleClass}`}>{subtitle}</p>
      )}
    </div>
  );
}