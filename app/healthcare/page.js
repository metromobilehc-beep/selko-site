import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Link from 'next/link';

export const metadata = {
  title: 'Selko Cred — Credentialing Software for Home Health & Outpatient Therapy',
  description:
    'Selko Cred is credential tracking and verification software built inside a real mobile outpatient therapy staffing company. License tracking, document verification, OIG exclusion monitoring, and payer credentialing forms.',
};

const roster = [
  {
    name: 'Cred',
    desc: 'License and credential tracking, document verification, OIG exclusion monitoring, and payer credentialing forms.',
    status: 'Live',
    href: '/demo',
  },
];

export default function HealthcarePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.08] text-balance max-w-2xl">
              Software your clinicians and your surveyor can both live with.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
              Selko started as internal tools for a mobile outpatient therapy
              staffing company in Tulsa — built to clear the compliance and
              credentialing bar our partner agencies actually set, not just
              keep our own records tidy. It's now a platform other agencies
              run on too, with one record per company and nothing shared
              between them.
            </p>
            <div className="mt-9">
              <Link
                href="/demo"
                className="font-mono text-xs uppercase tracking-widest bg-ink text-paper rounded-full px-6 py-3 hover:bg-teal transition-colors inline-block"
              >
                See Cred
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Not in healthcare?{' '}
              <Link href="/other-industries" className="text-teal hover:underline">
                See how Selko works for other regulated industries
              </Link>
              .
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <Stamp label="Selko" size={172} />
          </div>
        </section>

        {/* Why it exists — condensed for a page someone may land on
            directly from search, without the full home-page origin story */}
        <section className="max-w-content mx-auto px-6">
          <div className="bg-ink rounded-[10px] px-8 py-10 md:px-12 md:py-14">
            <p className="text-teal-l text-xs uppercase tracking-[.05em] font-semibold mb-4">Why it exists</p>
            <h2 className="font-display text-3xl leading-tight text-balance mb-6 text-white max-w-2xl">
              Metro places physical and occupational therapists with partner
              agencies across Oklahoma — and every partner has its own
              compliance bar to clear first.
            </h2>
            <p className="text-white/70 max-w-2xl leading-relaxed">
              Clearing it by spreadsheet meant re-checking license renewals
              by hand, one clinician at a time. Selko Cred started as the fix
              for that at Metro, first — nothing about it was built to be
              sold, just to stop paperwork from quietly going stale. Other
              agencies started asking to use it, and Selko is that platform
              now: multi-tenant, isolated by company, shaped by the actual
              paperwork of running a therapy staffing business.
            </p>
          </div>
        </section>

        {/* Roster */}
        <section className="max-w-content mx-auto px-6 py-24">
          <h2 className="font-display text-3xl mb-10 text-balance max-w-xl">
            One record. Built as the compliance requirements demanded it.
          </h2>
          <ul className="border-t border-line">
            {roster.map((m) => (
              <li key={m.name} className="border-b border-line">
                <Link
                  href={m.href}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-7 group hover:bg-paper-alt transition-colors -mx-6 px-6"
                >
                  <span className="font-display text-2xl w-28 shrink-0">
                    {m.name}
                  </span>
                  <span className="text-ink-soft flex-1 leading-relaxed">{m.desc}</span>
                  <span className="font-mono text-xs shrink-0 w-fit flex items-center gap-2 text-teal">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal" />
                    {m.status}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="max-w-content mx-auto px-6 pb-24">
          <div className="bg-ink rounded-[10px] px-8 py-10 md:px-12 md:py-14 grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-lg text-white">
                Meet every partner's compliance bar without rebuilding the
                paperwork each time.
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                See what Selko Cred actually does, then book 20 minutes to
                walk through it against your own staff list.
              </p>
              <div className="mt-8">
                <Link
                  href="/demo"
                  className="font-mono text-xs uppercase tracking-widest bg-gold text-ink rounded-full px-6 py-3 hover:bg-teal-l hover:text-ink transition-colors inline-block"
                >
                  Explore Cred
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Stamp label="Verified" size={128} color="#F8FAFC" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
