type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <svg
        className="brand-symbol"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          className="brand-symbol__shell"
          d="M24 3.5c11.1 0 19.5 8.8 19.5 20V43H4.5V23.5c0-11.2 8.4-20 19.5-20Z"
        />
        <circle className="brand-symbol__sun" cx="35" cy="13" r="4" />
        <path className="brand-symbol__roof" d="m10.5 24 13.5-12 13.5 12" />
        <path className="brand-symbol__monogram" d="m13.5 23 10.5 14 10.5-14" />
        <path className="brand-symbol__horizon" d="M10 40h28" />
      </svg>
      <span className="brand-wordmark"><strong>Veyra</strong> Villas</span>
    </span>
  );
}
