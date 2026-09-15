import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-content mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Image
            src="/logo-primary.png"
            alt="Selko — Smart software. Healthier outcomes."
            width={818}
            height={264}
            className="h-12 w-auto mb-3"
          />
          <p className="text-sm text-ink-soft max-w-xs">
            Built inside a working home health agency, not a boardroom.
            Selko Cred started it — more modules on the way as the need
            shows up.
          </p>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest">
          <p className="text-ink-soft mb-3">Product</p>
          <ul className="space-y-2">
            <li><Link href="/demo" className="hover:text-gold">Cred</Link></li>
          </ul>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest">
          <p className="text-ink-soft mb-3">Company</p>
          <ul className="space-y-2">
            <li>Tulsa, Oklahoma</li>
            <li>
              <a href="mailto:hello@selko360.com" className="hover:text-gold">
                hello@selko360.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-content mx-auto px-6 pb-10 text-xs text-ink-soft/70 font-mono">
        © {new Date().getFullYear()} Selko. A product of Metro Mobile Health Care.
      </div>
    </footer>
  );
}
