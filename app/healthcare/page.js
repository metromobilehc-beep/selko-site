import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Lightbox from '@/components/Lightbox';
import Image from 'next/image';
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
        {/* Hero — more confident typographic weight and a real depth
            treatment (a floating credibility card over a team photo),
            genuinely inspired by Juan's Certified Credentialing site,
            but without borrowing its generic marketing-page tells: no
            eyebrow pill, no arrow-suffixed button, no single-word
            color-accent buried in the headline. The credibility card
            states a real, verifiable fact instead of a slogan. */}
        <section className="max-w-content mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1.05fr_1fr] gap-16 items-center">
          <div>
            <h1 className="font-display text-5xl md:text-[3.4rem] leading-[1.05] text-balance max-w-2xl">
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
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="font-mono text-xs uppercase tracking-widest bg-ink text-paper rounded-full px-6 py-3 hover:bg-teal transition-colors inline-block"
              >
                See Cred
              </Link>
              <Link
                href="#compliance"
                className="font-mono text-xs uppercase tracking-widest border border-ink text-ink rounded-full px-6 py-3 hover:bg-ink hover:text-paper transition-colors inline-block"
              >
                Explore what it tracks
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 max-w-lg">
              {[
                'License & Credential tracking',
                'OIG exclusion monitoring',
                'NPI & board verification',
                'Payer credentialing forms',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="text-teal font-mono">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Not in healthcare?{' '}
              <Link href="/other-industries" className="text-teal hover:underline">
                See how Selko works for other regulated industries
              </Link>
              .
            </p>
          </div>

          <div>
            {/* Drop a real photo of Metro's own team in at
                /public/team-photo.jpg (1200x900 or similar) — using an
                actual photo of the people this was built for/by, rather
                than stock photography of clinicians who've never used
                it, since that's the more honest choice given the whole
                origin story this page tells. */}
            <div className="rounded-[10px] overflow-hidden shadow-lg aspect-[4/3] bg-paper-alt">
              <Image
                src="/team-photo.jpg"
                alt="The Metro Mobile Health Care team"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Sits below the photo rather than overlapping a corner —
                with two named founders side by side in the photo now,
                an overlapping card ends up covering one of their faces
                no matter which corner it's pinned to. */}
            <div className="mt-6 bg-white rounded-[10px] shadow-lg p-5 max-w-xs border border-line">
              <div className="flex items-start gap-3">
                <Stamp label="Selko" size={44} />
                <div>
                  <p className="font-display text-base leading-snug">
                    Built at Metro Mobile Health Care
                  </p>
                  <p className="text-xs text-ink-soft mt-1">
                    A real mobile outpatient therapy staffing company in Tulsa, OK — not a concept.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why it exists — condensed for a page someone may land on
            directly from search, without the full home-page origin story */}
        <section id="compliance" className="max-w-content mx-auto px-6 pt-8">
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

        {/* Real product screenshot — a fictional demo company, not a
            mockup, so what you see here is exactly what's in the app.
            Click-to-enlarge since it's a dense data table. */}
        <section className="max-w-content mx-auto px-6 py-16">
          <div className="rounded-[10px] overflow-hidden border border-line shadow-sm">
            <Lightbox
              src="/screenshots/documents.jpg"
              alt="Selko Cred's document tracking table, showing license status, verification, and expiration dates for a staff roster"
              width={1568}
              height={781}
            />
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            Every license and document, one table — current, expiring, or
            expired, with who verified it and when.
          </p>
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

        {/* Plans — Document Tracking is the required foundation, with a
            Standard/Pro feature split; Credentialing and HR Onboarding are
            each single-tier add-ons on top of it — buy them, get every
            feature, no further split within them. */}
        <section className="max-w-content mx-auto px-6 pb-24">
          <h2 className="font-display text-3xl mb-3 text-balance max-w-xl">
            One foundation, add what you need.
          </h2>
          <p className="text-ink-soft mb-10 max-w-2xl leading-relaxed">
            Document Tracking is the required foundation. Credentialing and
            HR Onboarding are add-ons on top of it — each a single price,
            every feature included once you have it. <strong className="text-ink">20% off everything</strong> when
            you use all three together.
          </p>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[.05em] text-teal mb-1">Document Tracking (required foundation)</h3>
            <p className="font-display text-2xl mb-4">Standard $49/mo &nbsp;·&nbsp; Pro $99/mo</p>
            <table className="w-full text-sm border-t border-line max-w-2xl">
              <tbody>
                {[
                  ['Upload, verify, track staff documents', true, true],
                  ['Overview stats, Expiration Tracker', true, true],
                  ['Automated staff/admin expiry reminders (30-day, 7-day, expired-weekly)', true, true],
                  ['Custom reminders (any message, any staff member, repeating)', true, true],
                  ['Pro-tier pre-built document types', false, true],
                  ['Customize or duplicate a built-in document type', false, true],
                  ['Agency/Partner Portal access', false, true],
                  ['Detailed Missing Docs report, bulk download, custom branding', false, true],
                ].map(([feature, std, pro]) => (
                  <tr key={feature} className="border-b border-line">
                    <td className="py-3 pr-4 text-ink-soft">{feature}</td>
                    <td className="py-3 text-center w-16 font-mono text-xs">{std ? <span className="text-teal">✓</span> : '—'}</td>
                    <td className="py-3 text-center w-16 font-mono text-xs">{pro ? <span className="text-teal">✓</span> : '—'}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td className="pt-2 text-center font-mono text-xs text-ink-soft">Std</td>
                  <td className="pt-2 text-center font-mono text-xs text-ink-soft">Pro</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-14 pt-10 border-t border-line max-w-2xl">
            <h3 className="font-mono text-xs uppercase tracking-[.05em] text-teal mb-1">+ Credentialing add-on</h3>
            <p className="font-display text-2xl mb-4">+$49/mo</p>
            <p className="text-ink-soft leading-relaxed mb-3">
              Everything below is included once you add Credentialing — no further tiers to pick between.
            </p>
            <ul className="text-sm text-ink-soft space-y-2 list-disc pl-5">
              <li>Organization profile — Tax ID, NPI, accreditations (ACHC, CHAP, Joint Commission)</li>
              <li>Per-provider CAQH ID, DEA number, board certification</li>
              <li>License & NPI lookup/verification against public registries</li>
              <li>Full CAQH-required data: education, employment history, hospital privileges, malpractice claims</li>
              <li>Professional references, with actual verification tracking — not just contact info</li>
              <li>OIG federal exclusion-list screening, NPI + name-matched with confidence scoring</li>
              <li>Upload a payer's blank form once, map fields, auto-generate filled copies per provider</li>
              <li>Clinician self-service document upload</li>
            </ul>
          </div>

          <div className="mt-14 pt-10 border-t border-line max-w-2xl">
            <h3 className="font-mono text-xs uppercase tracking-[.05em] text-teal mb-1">+ HR Onboarding add-on</h3>
            <p className="font-display text-2xl mb-4">+$49/mo</p>
            <ul className="text-sm text-ink-soft space-y-2 list-disc pl-5">
              <li>I-9, W-4, background check authorization, custom company policy documents</li>
              <li>Segregated storage (I-9 compliance requirement)</li>
              <li>Staff self-service onboarding portal — new hire fills their own Section 1, agency completes the rest</li>
              <li>Encrypted SSN storage, same audit pattern as Credentialing</li>
            </ul>
          </div>

          <div className="mt-14 pt-10 border-t border-line max-w-2xl">
            <p className="text-ink-soft leading-relaxed">
              <strong className="text-ink">Real-world example:</strong> a 15-person
              clinic on Standard + Credentialing pays about <strong className="text-ink">$98/mo combined</strong> —
              roughly $6.50 per provider, per month.
            </p>
          </div>
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
