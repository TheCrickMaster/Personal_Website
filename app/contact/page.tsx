/**
 * CONTACT PAGE — app/contact/page.tsx
 *
 * A minimal contact page in the spirit of the original site.
 * No contact form — just addresses, as the old-school web preferred.
 *
 * A form would require either:
 * a) A "use client" directive (to handle state/submission) — making it
 *    a Client Component, which increases the JS bundle sent to the browser.
 * b) A Server Action (Next.js 14+ feature) to handle submission server-side.
 *
 * For a personal site, a simple mailto link is the right trade-off.
 */
export default function ContactPage() {
  return (
    <div>
      <h1 className="italic mb-6">Contact</h1>

      <p className="mb-8">
        The best way to reach me is by email. I try to reply within a few
        days, though I can&apos;t always promise speed.
      </p>

      {/* Contact links as a definition list — semantically correct */}
      <dl>
        <dt>Email</dt>
        <dd>
          <a href="mailto:your.email@example.com">
            your.email@example.com
          </a>
        </dd>

        <dt>GitHub</dt>
        <dd>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </dd>

        <dt>LinkedIn</dt>
        <dd>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </dd>
      </dl>

      <hr />

      <p className="text-sm text-ink-light italic">
        I am not on most social media platforms. Email is best.
      </p>
    </div>
  );
}
