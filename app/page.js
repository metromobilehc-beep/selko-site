import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Link from 'next/link';

const roster = [
  {
    name: 'Cred',
    desc: 'License and credential tracking, document verification, OIG exclusion monitoring, and payer credentialing forms.',
    status: 'Live',
    href: '/demo',
  },
  {
    name: 'Voice',
    desc: 'Offline-first communication board for non-verbal patients.',
    status: 'In development',
    href: null,
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
          </div>
          <div className="hidden md:flex justify-center">
            <Stamp label="Selko" size={172} />
          </div>
        </section>

        {/* Origin — presented as one of the app's own dark panels: rounded
            navy card, white text, small uppercase teal micro-label header —
            the exact convention Selko Cred itself uses for every section. */}
        <section className="max-w-content mx-auto px-6">
          <div className="bg-ink rounded-[10px] px-8 py-10 md:px-12 md:py-14 grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <dl className="space-y-6 font-mono text-sm text-white/70 h-fit md:sticky md:top-10">
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

        {/* Roster — a ledger, not a card grid, on the plain page canvas */}
        <section className="max-w-content mx-auto px-6 py-24">
          <h2 className="font-display text-3xl mb-10 text-balance max-w-xl">
            One record. Built as the compliance requirements demanded it.
          </h2>
          <ul className="border-t border-line">
            {roster.map((m) => {
              const Wrapper = m.href ? Link : 'div';
              const wrapperProps = m.href ? { href: m.href } : {};
              return (
                <li key={m.name} className="border-b border-line">
                  <Wrapper
                    {...wrapperProps}
                    className={`flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-7 ${
                      m.href ? 'group hover:bg-paper-alt transition-colors -mx-6 px-6' : ''
                    }`}
                  >
                    <span className="font-display text-2xl w-28 shrink-0">
                      {m.name}
                    </span>
                    <span className="text-ink-soft flex-1 leading-relaxed">{m.desc}</span>
                    <span
                      className={`font-mono text-xs shrink-0 w-fit flex items-center gap-2 ${
                        m.status === 'Live' ? 'text-teal' : 'text-gold'
                      }`}
                    >
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full ${
                          m.status === 'Live' ? 'bg-teal' : 'bg-gold'
                        }`}
                      />
                      {m.status}
                    </span>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA — same dark-panel treatment as the origin section, kept as
            a contained card rather than a full-bleed band, matching how
            the app itself always presents dark content: bounded, rounded,
            never the whole viewport. */}
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
