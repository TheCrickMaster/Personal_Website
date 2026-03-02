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
        Feel free to reach out to me to discuss projects, collaborations, or simply to say hello! I usually try to respond within a few days. 
      </p>

      {/* Contact links as a definition list — semantically correct */}
      <dl>
        <dt>Email</dt>
        <dd>
          <a href="devdatta.kasture@gmail.com">
            devdatta.kasture@gmail.com
          </a>
        </dd>

        <dt>GitHub</dt>
        <dd>
          <a
            href="https://github.com/TheCrickMaster"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/TheCrickMaster
          </a>
        </dd>

        <dt>LinkedIn</dt>
        <dd>
          <a
            href="https://www.linkedin.com/in/devdattakasture/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/devdattakasture/
          </a>
        </dd>
      </dl>

      <hr />

      <p className="text-sm text-ink-light italic">
        At this time, I am not active on most social media platforms.
      </p>
    </div>
  );
}
