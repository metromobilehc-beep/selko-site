import Link from 'next/link';

const links = [
  { href: '/cred', label: 'Cred' },
  { href: '/comply', label: 'Comply' },
];

export default function Nav() {
  return (
    <header className="border-b border-line">
      <div className="max-w-content mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="font-display italic text-2xl tracking-tight">
          Selko
        </Link>
        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://app.selko360.com"
            className="font-mono text-xs uppercase tracking-widest border border-ink rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
          >
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}
