type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <svg
        className="brand-symbol"
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        <path className="brand-symbol__flag" d="M21.5 7.5v23.2" />
        <path className="brand-symbol__flag" d="M22 8.5h12l-3.6 5 3.6 5H22" />
        <circle className="brand-symbol__ball" cx="16" cy="30" r="9.5" />
        <circle className="brand-symbol__dimple" cx="12.7" cy="27" r="1" />
        <circle className="brand-symbol__dimple" cx="17.7" cy="26" r="1" />
        <circle className="brand-symbol__dimple" cx="14.8" cy="32" r="1" />
        <circle className="brand-symbol__dimple" cx="19.3" cy="31" r="1" />
        <path className="brand-symbol__ground" d="M7 39c8.2-3 16.4-3 24.6 0" />
      </svg>
      <span className="brand-wordmark">Golfiers</span>
    </span>
  );
}
