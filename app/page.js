import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Link from 'next/link';

const paths = [
  {
    name: 'Healthcare & Therapy Staffing',
    desc: 'Selko Cred, built for home health and outpatient therapy — license tracking, OIG exclusion monitoring, and payer credentialing forms.',
    href: '/healthcare',
  },
  {
    name: 'Other Regulated Industries',
    desc: 'The same tracking and verification engine, for any business that lives or dies by keeping licenses, certifications, and filings current.',
    href: '/other-industries',
  },
];

export default function Home() {
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
              Selko started inside a real healthcare staffing company
              solving its own compliance problem. It's now a platform for
              any regulated business that lives or dies by keeping
              paperwork current, with one record per company and nothing
              shared between them.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <Stamp label="Selko" size={172} />
          </div>
        </section>

        {/* Origin — the full story lives here once; the vertical pages
            link back to it rather than repeating it. Same dark-panel
            convention as the app itself uses for every section. */}
        <section className="max-w-content mx-auto px-6">
          <div className="bg-ink rounded-[10px] px-8 py-10 md:px-12 md:py-14 grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <dl className="space-y-6 font-mono text-sm text-white/70 h-fit">
              <p className="text-teal-l text-xs uppercase tracking-[.05em] font-semibold mb-2">Why it exists</p>
              <div>
                <dt>Built at</dt>
                <dd className="mt-1 text-white">Metro Mobile Health Care</dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd className="mt-1 text-white">Tulsa, Oklahoma</dd>
              </div>
              <div>
                <dt>What Metro does</dt>
                <dd className="mt-1 text-white">Mobile outpatient PT/OT staffing</dd>
              </div>
            </dl>
            <div>
              <h2 className="font-display text-3xl leading-tight text-balance mb-6 text-white">
                We built the tool we couldn't find, then kept building it
                for the agencies asking about it.
              </h2>
              <div className="text-white/70 space-y-4 max-w-2xl leading-relaxed">
                <p>
                  Metro places physical and occupational therapists with
                  partner agencies across Oklahoma, and every partner has its
                  own compliance and credentialing bar to clear before a
                  clinician can start seeing patients. Clearing it by
                  spreadsheet meant re-checking license renewals by hand, one
                  clinician at a time, and hoping nothing quietly went stale
                  in between.
                </p>
                <p>
                  Selko Cred started as the fix for that at Metro, first —
                  nothing about it was built to be sold, just to stop that
                  paperwork from slipping.
                </p>
                <p>
                  Other agencies started asking to use it. Selko is that
                  platform now: multi-tenant, isolated by company, and
                  shaped by the actual paperwork of running a therapy
                  staffing business, rather than generic practice-management
                  software repurposed for the field.
                </p>
                <p>
                  What it turned out to track — who's credentialed,
                  verified, and current — was never really specific to
                  healthcare. Built for that first, the same engine adapts
                  to any regulated industry that lives or dies by keeping
                  paperwork current.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fork — the actual job of this page: get someone to the
            landing page written for them, rather than one generic pitch
            trying to speak to both audiences at once. */}
        <section className="max-w-content mx-auto px-6 py-24">
          <h2 className="font-display text-3xl mb-10 text-balance max-w-xl">
            Which is this for?
          </h2>
          <ul className="border-t border-line">
            {paths.map((p) => (
              <li key={p.name} className="border-b border-line">
                <Link
                  href={p.href}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-7 group hover:bg-paper-alt transition-colors -mx-6 px-6"
                >
                  <span className="font-display text-2xl w-64 shrink-0">
                    {p.name}
                  </span>
                  <span className="text-ink-soft flex-1 leading-relaxed">{p.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
