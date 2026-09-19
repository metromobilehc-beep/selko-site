import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'See Selko Cred in Action',
  description:
    'A look at what Selko Cred actually does — license and credential tracking, document verification, OIG exclusion monitoring, and payer form generation — plus how to book time to talk through it.',
};

// Real, currently-built Cred features — keep this in sync with what's
// actually shipped rather than the roadmap. Each one should be
// something a prospect could see live in a demo call, not aspirational.
const features = [
  {
    title: 'License & credential tracking',
    desc: 'Every license, certification, and required document per staff member, with automatic expiring/expired status and a real-time compliance overview — not a spreadsheet someone has to remember to update.',
  },
  {
    title: 'Document verification',
    desc: 'Admins upload and verify documents directly, with an OCR-assisted scan step and a permanent audit trail of who verified what and when.',
  },
  {
    title: 'Missing documents report',
    desc: 'A dedicated view of exactly who is missing which required or optional document — not just who has something unverified — sortable and exportable as a PDF.',
  },
  {
    title: 'OIG exclusion monitoring',
    desc: 'Staff are checked against the official OIG exclusion list, on demand or on an automated monthly schedule per company, with matches confidence-scored (NPI-confirmed vs. name-only) so a coincidental name match on a common name never reads as a real hit.',
  },
  {
    title: 'NPI lookup & verification',
    desc: 'Look up and verify individual NPIs directly against the public NPPES registry from inside a staff record.',
  },
  {
    title: 'Payer credentialing form generation',
    desc: 'Upload a blank fillable payer enrollment PDF once, map its fields to staff and company data, and generate a filled form per provider going forward — no more retyping the same information into every payer\'s paperwork.',
  },
];

// Real Google Calendar booking link for Selko Cred demo calls.
const BOOKING_URL = 'https://calendar.app.google/p4K43ihvuULDPM4aA';

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="max-w-content mx-auto px-6 pt-20 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-teal mb-6">
            Selko Cred
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance max-w-3xl">
            See what's actually <em className="italic">built</em>, not a pitch deck.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl">
            Everything below is live in the product today. If it looks like
            something that would save your office real time, book 20 minutes
            and we'll walk through it on your own staff list.
          </p>
        </section>

        {/* Feature grid */}
        <section className="bg-paper-alt border-y border-line">
          <div className="max-w-content mx-auto px-6 py-20">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {features.map((f) => (
                <div key={f.title}>
                  <h2 className="font-display text-2xl mb-2 text-balance">
                    {f.title}
                  </h2>
                  <p className="text-ink-soft">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*
          Video walkthrough slot — intentionally left out until a real
          video exists. Drop an embed back in here later, e.g.:

          <section className="max-w-content mx-auto px-6 py-20">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-line">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Selko Cred walkthrough"
                allowFullScreen
              />
            </div>
          </section>
        */}

        {/* Booking CTA */}
        <section className="bg-ink text-paper">
          <div className="max-w-content mx-auto px-6 py-20 text-center">
            <h2 className="font-display text-3xl md:text-4xl italic text-balance">
              Book a walkthrough
            </h2>
            <p className="mt-4 text-paper/70 max-w-lg mx-auto">
              20 minutes, no slides — we'll show you Cred against a real
              staff roster and answer whatever's actually holding your
              credentialing process back.
            </p>
            <div className="mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest bg-gold text-ink rounded-full px-6 py-3 hover:bg-paper transition-colors inline-block"
              >
                Book a demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
