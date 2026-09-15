import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Link from 'next/link';

export const metadata = {
  title: 'Selko — Credential & Compliance Tracking for Regulated Industries',
  description:
    'Selko tracks who is licensed, verified, and current for any regulated business — license and certification tracking, document verification, compliance monitoring, and regulatory paperwork, generated once and reused everywhere.',
};

const roster = [
  {
    name: 'Cred',
    desc: 'License and certification tracking, document verification, compliance monitoring, and regulatory paperwork — generated once, reused everywhere it\u2019s needed.',
    status: 'Live',
    href: '/demo',
  },
];

export default function OtherIndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.08] text-balance max-w-2xl">
              Software your team and your regulators can both live with.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
              Selko started inside a healthcare staffing company solving its
              own credentialing problem — tracking who was licensed,
              verified, and current before compliance ever became a fire
              drill. The same engine now works for any regulated business
              with the same problem: renewals, certifications, and paperwork
              that can't be allowed to quietly expire.
            </p>
            <div className="mt-9">
              <Link
                href="/demo"
                className="font-mono text-xs uppercase tracking-widest bg-ink text-paper rounded-full px-6 py-3 hover:bg-teal transition-colors inline-block"
              >
                See Selko
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              In healthcare?{' '}
              <Link href="/healthcare" className="text-teal hover:underline">
                See Selko Cred built for home health &amp; outpatient therapy
              </Link>
              .
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <Stamp label="Selko" size={172} />
          </div>
        </section>

        {/* Why it exists — condensed, industry-agnostic */}
        <section className="max-w-content mx-auto px-6">
          <div className="bg-ink rounded-[10px] px-8 py-10 md:px-12 md:py-14">
            <p className="text-teal-l text-xs uppercase tracking-[.05em] font-semibold mb-4">Why it exists</p>
            <h2 className="font-display text-3xl leading-tight text-balance mb-6 text-white max-w-2xl">
              Built to fix one company's own compliance problem, not to be
              sold.
            </h2>
            <p className="text-white/70 max-w-2xl leading-relaxed">
              Every regulated business ends up with the same quiet risk: a
              license, certification, or filing that goes stale before
              anyone notices. Selko started as the fix for that inside a
              real operating company, and stayed shaped by actual paperwork
              rather than generic compliance software repurposed for the
              job. It's multi-tenant and isolated by company, so your
              records are never shared with anyone else on the platform.
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
                See it against your own paperwork, not a slide deck.
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                Book 20 minutes to walk through Selko Cred against what your
                team actually has to keep current.
              </p>
              <div className="mt-8">
                <Link
                  href="/demo"
                  className="font-mono text-xs uppercase tracking-widest bg-gold text-ink rounded-full px-6 py-3 hover:bg-teal-l hover:text-ink transition-colors inline-block"
                >
                  Explore Selko
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
