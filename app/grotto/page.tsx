export default function GrottoPage() {
  return (
    <div>
      <h1 className="text-2xl mb-2">The Grotto</h1>
      <p className="text-sm italic mb-8">
        A corner of the internet for things I love — no particular theme,
        no particular order. Just things worth sharing.
      </p>

      {/* ── COOKING ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl mb-1">Cooking</h2>
        <p className="text-sm italic mb-4">
          Videos and articles that have changed the way I cook.
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video or Article Title
            </a>
            <p className="text-sm mt-1">
              A note on why this stuck with me or what I learned from it.
            </p>
          </li>
          <li className="mb-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Another Video or Article
            </a>
            <p className="text-sm mt-1">
              Your thoughts on it — keep it casual and personal.
            </p>
          </li>
        </ul>
      </section>

      <hr />

      {/* ── CROCHET ────────────────────────────────────────────── */}
      <section className="mb-10 mt-8">
        <h2 className="text-xl mb-1">Crochet</h2>
        <p className="text-sm italic mb-4">
          Patterns, projects, and things I&apos;m currently working on.
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pattern or Resource Name
            </a>
            <p className="text-sm mt-1">
              Notes on the pattern — difficulty, yarn used, what you&apos;d
              change next time.
            </p>
          </li>
          <li className="mb-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Another Pattern or Project
            </a>
            <p className="text-sm mt-1">
              What drew you to this one and how it turned out.
            </p>
          </li>
        </ul>
      </section>

      <hr />

      {/* ── FASHION ────────────────────────────────────────────── */}
      <section className="mb-10 mt-8">
        <h2 className="text-xl mb-1">Fashion</h2>
        <p className="text-sm italic mb-4">
          Pieces, designers, and inspo that I keep coming back to.
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brand, Article, or Lookbook
            </a>
            <p className="text-sm mt-1">
              What you like about it — the aesthetic, the ethos, the fit.
            </p>
          </li>
        </ul>
      </section>

      <hr />

      {/* ── VIDEO & PHOTOGRAPHY ────────────────────────────────── */}
      <section className="mb-10 mt-8">
        <h2 className="text-xl mb-1">Video &amp; Photography</h2>
        <p className="text-sm italic mb-4">
          Creators, gear, and editing resources I find myself returning to.
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creator or Resource Name
            </a>
            <p className="text-sm mt-1">
              What makes their work stand out — style, technique, storytelling.
            </p>
          </li>
        </ul>

        {/* YouTube placeholder — swap this out when your channel is live */}
        <div
          className="mt-6 border border-black p-4 text-sm"
          style={{ borderStyle: "dashed" }}
        >
          <p className="font-bold mb-1">YouTube — Coming Soon</p>
          <p>
            I&apos;m working on launching my own channel. Check back here for
            the link when it&apos;s live.
          </p>
        </div>
      </section>
    </div>
  );
}