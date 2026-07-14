import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Link from 'next/link';

export const metadata = {
  title: 'Selko Cred — License & Credential Tracking for Home Health',
  description:
    'Selko Cred tracks staff licenses and credentials across every discipline — PT, OT, COTA, PTA, SLP — with expiry alerts, multi-state verification, and a self-service credential portal for staff.',
  alternates: { canonical: 'https://selko360.com/cred' },
  openGraph: {
    title: 'Selko Cred — License & Credential Tracking for Home Health',
    description:
      'Stop chasing expired licenses in spreadsheets. Cred verifies and tracks credentials across every discipline, with expiry banners and staff self-service.',
    url: 'https://selko360.com/cred',
  },
};

const faqs = [
  {
    q: 'Which disciplines does Cred track?',
    a: 'PT, OT, COTA, PTA, and SLP licenses today, plus any supporting certifications your agency requires — CPR, TB tests, background checks, and state-specific documents.',
  },
  {
    q: 'Does Cred verify licenses automatically?',
    a: 'Cred checks license status against state licensing boards and flags mismatches or lapses, so verification is not a manual lookup every renewal cycle.',
  },
  {
    q: 'Can staff upload their own documents?',
    a: 'Yes. Staff get a "My Credentials" view to upload front-and-back document images themselves, which admins then review and approve.',
  },
  {
    q: 'What happens before a license expires?',
    a: 'Expiry banners surface upcoming lapses to both the staff member and the admin team with enough lead time to renew before it becomes a compliance gap.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function CredPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <section className="max-w-content mx-auto px-6 pt-20 pb-16 grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal mb-6">
              Selko / Cred
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-balance">
              Every license, every discipline, one place that's always current.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl">
              Cred replaces the spreadsheet, the shared drive folder, and the
              sticky note on someone's monitor. It tracks who's licensed for
              what, verifies it against the state, and tells you before a gap
              becomes a survey finding.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <Stamp label="Verified" size={150} color="#3A6B5C" />
          </div>
        </section>

        <section className="border-y border-line bg-paper-alt">
          <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
            <Feature
              title="Multi-state verification"
              body="Cred checks license status against the issuing state board, across every state your clinicians are licensed in — not just the one where your agency is based."
            />
            <Feature
              title="Front-and-back document capture"
              body="Staff upload both sides of a license or certification directly from their phone. No scanning, no emailing PDFs to an admin inbox."
            />
            <Feature
              title="Expiry banners that don't get ignored"
              body="Upcoming lapses show up in the staff member's own portal and in the admin dashboard, with enough runway to renew before it's a problem."
            />
          </div>
        </section>

        <section className="max-w-content mx-auto px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">
            Who it's for
          </p>
          <h2 className="font-display text-3xl mb-6 text-balance">
            Agencies with clinicians across counties, states, and disciplines.
          </h2>
          <p className="text-ink-soft max-w-2xl">
            If your roster includes PT, OT, COTA, and PTA staff working under
            different state license rules, tracking credentials by hand
            doesn't scale past a handful of people. Cred was built inside an
            agency running exactly that mix, before it was offered to anyone
            else.
          </p>
        </section>

        <section className="max-w-content mx-auto px-6 pb-24">
          <p className="font-mono text-xs uppercase tracking-widest text-teal mb-6">
            Common questions
          </p>
          <div className="border-t border-line">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-line py-6">
                <h3 className="font-display text-xl mb-2">{f.q}</h3>
                <p className="text-ink-soft max-w-2xl">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="max-w-content mx-auto px-6 py-16 text-center">
            <h2 className="font-display text-3xl italic text-balance">
              Pair Cred with Comply for the full compliance picture.
            </h2>
            <div className="mt-8">
              <Link
                href="/comply"
                className="font-mono text-xs uppercase tracking-widest border border-paper rounded-full px-6 py-3 hover:bg-paper hover:text-ink transition-colors"
              >
                See Comply
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Feature({ title, body }) {
  return (
    <div>
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-ink-soft">{body}</p>
    </div>
  );
}
