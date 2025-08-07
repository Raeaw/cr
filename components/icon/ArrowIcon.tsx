interface ArrowIconProps {
  direction?: "down" | "left" | "right" | "up";
  className?: string;
}

const rotationMap = {
  down: "rotate-0",
  right: "rotate-90",
  up: "rotate-180",
  left: "-rotate-90",
};

export default function ArrowIcon({ direction = "down", className = "" }: ArrowIconProps) {
  return (
    <svg
      className={`w-6 h-6 mx-auto text-black animate-bounce ${rotationMap[direction]} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
