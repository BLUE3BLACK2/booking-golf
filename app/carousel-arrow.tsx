export default function CarouselArrow({ direction }: { direction: "left" | "right" }) {
  const path = direction === "left"
    ? "M14 7 9 12l5 5M9 12h9"
    : "M10 7l5 5-5 5M15 12H6";

  return (
    <svg className="carousel-arrow-icon" aria-hidden="true" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}
