import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Stamp from '@/components/Stamp';
import Link from 'next/link';

export const metadata = {
  title: 'Selko Comply — Compliance Training Software for Home Health',
  description:
    'Selko Comply runs your annual compliance training as a self-service module library, with seat limits, trial access, and self-service onboarding for new agencies.',
  alternates: { canonical: 'https://selko360.com/comply' },
  openGraph: {
    title: 'Selko Comply — Compliance Training Software for Home Health',
    description:
      'A self-service compliance module library built for home health agencies — seat limits, trials, and onboarding without a sales call.',
    url: 'https://selko360.com/comply',
  },
};

const faqs = [
  {
    q: 'What kind of training runs through Comply?',
    a: 'HIPAA, annual required training, wound care, and other agency-specific compliance modules, organized into a library staff move through on their own schedule.',
  },
  {
    q: 'Can we try Comply before committing?',
    a: 'Yes. Comply has a trial mode with a lockout once the trial period or seat limit is reached, so you can evaluate it with your actual team before signing on.',
  },
  {
    q: 'How does onboarding work for a new agency?',
    a: 'Comply has a self-service onboarding flow — a new agency can set up their company, invite staff, and start assigning modules without a lengthy setup call.',
  },
  {
    q: 'Is our agency\'s data separate from other agencies on Selko?',
    a: 'Every agency is isolated by company at the data layer. Nothing in your module library, staff roster, or completion records is visible to any other company on the platform.',
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

export default function ComplyPage() {
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
              Selko / Comply
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-balance">
              Compliance training your staff actually finish.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl">
              Comply organizes HIPAA, annual training, and agency-specific
              modules into one library, tracks who's done what, and locks
              access cleanly at the end of a trial or a seat limit — no
              awkward manual cutoffs.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <Stamp label="On File" size={150} color="#C08A2E" />
          </div>
        </section>

        <section className="border-y border-line bg-paper-alt">
          <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
            <Feature
              title="A real module library"
              body="HIPAA, wound care, annual required training, and agency-specific modules live in one library, not scattered across PDFs and email attachments."
            />
            <Feature
              title="Trials and seat limits, handled"
              body="Evaluate Comply with a real trial period. When it ends, or a seat limit is hit, access locks out cleanly instead of a manual scramble."
            />
            <Feature
              title="Self-service onboarding"
              body="A new agency can set itself up, invite staff, and assign modules without waiting on a sales call or an implementation team."
            />
          </div>
        </section>

        <section className="max-w-content mx-auto px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">
            Who it's for
          </p>
          <h2 className="font-display text-3xl mb-6 text-balance">
            Agencies tired of chasing training completions by hand.
          </h2>
          <p className="text-ink-soft max-w-2xl">
            Comply was built for the same reason Cred was: a working agency
            needed to stop tracking mandatory training in spreadsheets and
            email threads before a survey found the gap first.
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
              Pair Comply with Cred to close the whole compliance loop.
            </h2>
            <div className="mt-8">
              <Link
                href="/cred"
                className="font-mono text-xs uppercase tracking-widest border border-paper rounded-full px-6 py-3 hover:bg-paper hover:text-ink transition-colors"
              >
                See Cred
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
