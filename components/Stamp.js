const REPEAT = ' •  ';

export default function Stamp({
  label = 'VERIFIED',
  ring = 'ON FILE   CURRENT   VERIFIED   ',
  size = 128,
  color = '#2F6F4E',
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
      {/* Inner ring — fixed, doesn't rotate with the status text — gives
          the seal a real double-ring stamp structure rather than a
          single circle. */}
      <svg viewBox="0 0 200 200" width={size * 0.62} height={size * 0.62} style={{ position: 'absolute' }}>
        <circle cx="100" cy="100" r="72" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
      </svg>
      <span
        className="font-mono font-semibold uppercase text-center leading-none"
        style={{ fontSize: size * 0.115, letterSpacing: '0.04em' }}
      >
        {label}
      </span>
    </div>
  );
}
