const REPEAT = ' •  ';

export default function Stamp({
  label = 'VERIFIED',
  ring = 'ON FILE   CURRENT   VERIFIED   ',
  size = 128,
  color = '#1F2A24',
  className = '',
}) {
  const id = `stamp-path-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const text = ring.repeat(3);

  return (
    <div
      className={`stamp ${className}`}
      style={{ width: size, height: size, color }}
      aria-hidden="true"
    >
      <div className="stamp-ring">
        <svg viewBox="0 0 200 200" width={size} height={size}>
          <path
            id={id}
            fill="none"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
          <text fontSize="10.5" letterSpacing="2" fill={color} fontFamily="var(--font-plex-mono)">
            <textPath href={`#${id}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <span
        className="font-display italic text-center leading-none"
        style={{ fontSize: size * 0.13 }}
      >
        {label}
      </span>
    </div>
  );
}
