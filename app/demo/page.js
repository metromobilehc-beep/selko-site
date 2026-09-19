import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'See Selko Cred in Action',
  description:
    'A look at what Selko Cred actually does — license and credential tracking, document verification, OIG exclusion monitoring, and payer form generation — plus how to book time to talk through it.',
};

// Real Google Calendar booking link for Selko Cred demo calls.
const BOOKING_URL = 'https://calendar.app.google/p4K43ihvuULDPM4aA';

// Real, currently-built Cred features — keep this in sync with what's
// actually shipped rather than the roadmap. Each one should be
// something a prospect could see live in a demo call, not aspirational.
// A screenshot is attached where one exists; the rest stay text-only
// rather than faked, since a placeholder image would undercut the
// whole point of this page.
const features = [
  {
    title: 'License & Credential tracking',
    desc: 'Every license, certification, and required document per staff member, with automatic expiring/expired status and a real-time compliance overview — not a spreadsheet someone has to remember to update.',
    screenshot: {
      src: '/screenshots/documents.jpg',
      alt: "Selko Cred's document tracking table, showing license status, verification, and expiration dates for a staff roster",
    },
  },
  {
    title: 'Document verification',
    desc: 'Admins upload and verify documents directly, with an OCR-assisted scan step and a permanent audit trail of who verified what and when.',
  },
  {
    title: 'Missing documents report',
    desc: 'A dedicated view of exactly who is missing which required or optional document — not just who has something unverified — sortable and exportable as a PDF.',
    screenshot: {
      src: '/screenshots/overview.jpg',
      alt: 'Selko Cred overview dashboard showing credentialing stats and a needs-attention list of missing items per staff member',
    },
  },
  {
    title: 'OIG exclusion monitoring',
    desc: 'Staff are checked against the official OIG exclusion list, on demand or on an automated monthly schedule per company, with matches confidence-scored (NPI-confirmed vs. name-only) so a coincidental name match on a common name never reads as a real hit.',
    screenshot: {
      src: '/screenshots/oig-check.jpg',
      alt: 'Selko Cred OIG Check Details modal, showing a full staff roster checked against the federal exclusion list with a clear result for each person',
      caption: "A real check against every staff member — this run came back clean, which is the outcome you actually want to see.",
    },
  },
  {
    title: 'NPI lookup & verification',
    desc: 'Look up and verify individual NPIs directly against the public NPPES registry from inside a staff record.',
  },
  {
    title: 'Payer credentialing form generation',
    desc: 'Upload a blank fillable payer enrollment PDF once, map its fields to staff and company data, and generate a filled form per provider going forward — no more retyping the same information into every payer\'s paperwork.',
    screenshot: {
      src: '/screenshots/payer-form.jpg',
      alt: 'A real Texas Standardized Credentialing Application, auto-filled with practice location, tax ID, and credentialing contact information from Selko Cred',
      caption: 'One click, pulled from data already on file — practice address, tax ID, credentialing contact, all filled in.',
    },
  },
];

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero — no repeated Stamp icon here; this page's identity is
            the real screenshots below, not a borrowed signature motif
            from the other pages. */}
        <section className="max-w-content mx-auto px-6 pt-20 pb-16">
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-balance max-w-2xl">
            See what's actually built, not a pitch deck.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
            Everything below is live in the product today, shown with real
            screenshots rather than mockups. If it looks like something
            that would save your office real time, book 20 minutes and
            we'll walk through it on your own staff list.
          </p>
        </section>

        {/* Feature list — ledger rows, matching the roster convention
            used on the healthcare/other-industries pages, with a real
            screenshot attached wherever one exists. */}
        <section className="bg-paper-alt border-y border-line">
          <div className="max-w-content mx-auto px-6 py-20">
            <ul className="border-t border-line">
              {features.map((f) => (
                <li key={f.title} className="border-b border-line py-10 first:pt-0">
                  <div className={f.screenshot ? 'grid md:grid-cols-[1fr_1.3fr] gap-10 items-center' : ''}>
                    <div>
                      <h2 className="font-display text-2xl mb-2 text-balance">
                        {f.title}
                      </h2>
                      <p className="text-ink-soft leading-relaxed">{f.desc}</p>
                    </div>
                    {f.screenshot ? (
                      <div>
                        <div className="rounded-[10px] overflow-hidden border border-line shadow-sm">
                          <Image
                            src={f.screenshot.src}
                            alt={f.screenshot.alt}
                            width={1568}
                            height={781}
                            className="w-full h-auto block"
                          />
                        </div>
                        {f.screenshot.caption ? (
                          <p className="mt-2 text-sm text-ink-soft">{f.screenshot.caption}</p>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
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

        {/* Booking CTA — same dark-panel convention used site-wide, but
            without the Stamp, so this page doesn't just repeat home's
            signature move a second time. */}
        <section className="max-w-content mx-auto px-6 py-24">
          <div className="bg-ink rounded-[10px] px-8 py-10 md:px-12 md:py-14">
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-lg text-white">
              Book a walkthrough
            </h2>
            <p className="mt-4 text-white/70 max-w-md">
              20 minutes, no slides — we'll show you Cred against a real
              staff roster and answer whatever's actually holding your
              credentialing process back.
            </p>
            <div className="mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest bg-gold text-ink rounded-full px-6 py-3 hover:bg-teal-l hover:text-ink transition-colors inline-block"
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
