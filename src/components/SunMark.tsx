// Daywalker sun mark — original vector drawn for this project:
// a solid amber disc with eight short triangular rays.
export default function SunMark({ size = 30 }: { size?: number }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Daywalker sun mark" role="img">
      <g fill="#d97706">
        <circle cx="32" cy="32" r="15" />
        {rays.map((deg) => (
          <path
            key={deg}
            d="M32 3 L36.5 15 L27.5 15 Z"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </g>
    </svg>
  );
}
