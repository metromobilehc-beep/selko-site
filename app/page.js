import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Link from 'next/link';

const modules = [
  { name: 'Cred', desc: 'License and credential tracking, verification, expiry alerts.', status: 'Live', href: '/cred' },
  { name: 'Comply', desc: 'Compliance training modules, seat limits, self-service onboarding.', status: 'Live', href: '/comply' },
  { name: 'HEP', desc: 'Home exercise program builder with a shared exercise library.', status: 'Live', href: null },
  { name: 'Billing', desc: 'Multi-agency visit import, invoicing, payroll, mileage, A/R.', status: 'Live', href: null },
  { name: 'Voice', desc: 'Offline-first communication board for non-verbal patients.', status: 'In development', href: null },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal mb-6">
              Home health software, built by an operator
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance">
              Software your <em className="italic">clinicians</em> and your
              <em className="italic"> surveyor</em> can both live with.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl">
              Selko started as internal tools for a Tulsa home health agency —
              a way to stop chasing expired licenses in spreadsheets and
              re-explaining compliance rules over email. It's now a platform
              other agencies run on too, with one record per company and
              nothing shared between them.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/cred"
                className="font-mono text-xs uppercase tracking-widest bg-ink text-paper rounded-full px-6 py-3 hover:bg-teal transition-colors"
              >
                See Cred
              </Link>
              <Link
                href="/comply"
                className="font-mono text-xs uppercase tracking-widest border border-ink rounded-full px-6 py-3 hover:bg-ink hover:text-paper transition-colors"
              >
                See Comply
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <Stamp label="Selko" size={168} color="#1F2A24" />
          </div>
        </section>

        {/* Origin story */}
        <section className="bg-paper-alt border-y border-line">
          <div className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">
                Why it exists
              </p>
              <h2 className="font-display text-3xl leading-tight text-balance">
                We built the tool we couldn't find, then kept building it
                for the agencies asking about it.
              </h2>
            </div>
            <div className="text-ink-soft space-y-4">
              <p>
                Metro Mobile Health Care is a working home health therapy
                staffing company in Tulsa, Oklahoma. Every module in Selko
                — credential tracking, compliance training, home exercise
                programs, billing — was built to solve a real operational
                problem at Metro first, under real state survey pressure.
              </p>
              <p>
                Other agencies started asking to use the same tools. Selko is
                that platform: multi-tenant, isolated by company, and shaped
                by day-to-day home health operations rather than generic
                practice-management software repurposed for the field.
              </p>
            </div>
          </div>
        </section>

        {/* Module roster */}
        <section className="max-w-content mx-auto px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-teal mb-4">
            The roster
          </p>
          <h2 className="font-display text-3xl mb-10 text-balance">
            One company record. Five modules, built as they were needed.
          </h2>
          <ul className="border-t border-line">
            {modules.map((m) => {
              const Wrapper = m.href ? Link : 'div';
              const wrapperProps = m.href ? { href: m.href } : {};
              return (
                <li key={m.name} className="border-b border-line">
                  <Wrapper
                    {...wrapperProps}
                    className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 ${
                      m.href ? 'group hover:bg-paper-alt transition-colors -mx-6 px-6' : ''
                    }`}
                  >
                    <span className="font-display italic text-2xl w-28 shrink-0">
                      {m.name}
                    </span>
                    <span className="text-ink-soft flex-1">{m.desc}</span>
                    <span
                      className={`font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border shrink-0 w-fit ${
                        m.status === 'Live'
                          ? 'border-teal text-teal'
                          : 'border-gold text-gold'
                      }`}
                    >
                      {m.status}
                    </span>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA band */}
        <section className="bg-ink text-paper">
          <div className="max-w-content mx-auto px-6 py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl italic text-balance">
              Start with the module that's costing you the most time.
            </h2>
            <p className="mt-4 text-paper/70 max-w-lg mx-auto">
              Most agencies start with Cred or Comply. Both plug into the
              rest of Selko as you grow into it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/cred"
                className="font-mono text-xs uppercase tracking-widest bg-gold text-ink rounded-full px-6 py-3 hover:bg-paper transition-colors"
              >
                Explore Cred
              </Link>
              <Link
                href="/comply"
                className="font-mono text-xs uppercase tracking-widest border border-paper rounded-full px-6 py-3 hover:bg-paper hover:text-ink transition-colors"
              >
                Explore Comply
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
