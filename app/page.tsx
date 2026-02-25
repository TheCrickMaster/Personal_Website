/**
 * HOME PAGE — app/page.tsx
 * ========================
 * In Next.js App Router, every page.tsx is a React Server Component
 * by default. This means it runs on the server and sends HTML to
 * the browser — no client-side JavaScript is needed for static content.
 *
 * There is no "use client" directive here, which is correct.
 * Server Components = faster, smaller bundle, better SEO.
 */
export default function Home() {
  return (
    <div>
      {/*
        Opening quote — mirrors the aniketd aesthetic of leading with
        an aphorism. The <blockquote> is styled in globals.css with
        the accent left border + italic IM Fell English.
      */}
      <blockquote>
        &ldquo;For those who have conquered the mind, it is their friend. For those who have failed to do so, the mind works like an enemy.&rdquo;
        <cite>Bhagavad Gita 6:6</cite>
      </blockquote>

      {/*
        Page heading — italic IM Fell English looks exceptional here.
        font-display + italic is the signature typographic moment of
        this aesthetic.
      */}
      <h1 className="italic mb-6">Hello, world.</h1>

      {/*
        .intro class triggers the drop-cap on the first letter.
        Defined in globals.css — a classic print typography device
        that signals "this is where you start reading."
      */}
      <p className="intro">
        This is my corner of the web. I write about things that concern or
        interest me — <em>technology, ideas, long walks,</em> and the
        occasional strange thought that deserves to be written down before
        it evaporates.
      </p>

      <p>
        By trade I am a <strong>software engineer</strong>, though I spend
        a fair amount of time thinking about things that have nothing to do
        with software. I build things, read books, and try to write clearly.
      </p>

      <p>
        If you&apos;d like to know more about what I do professionally, the{" "}
        <a href="/about">about page</a> has a full résumé. If you&apos;d
        like to say hello, <a href="/contact">the address is there too</a>.
      </p>

      <hr />

      {/*
        Recent posts preview — hand-coded for the home page.
        On a real site you'd pull from getAllPosts() here.
        We use the .entry component class from globals.css.
      */}
      <h2 className="mb-4 pb-2 border-b border-rule">Recent Writing</h2>

      <article className="entry">
        <div className="entry-header">
          <h3>
            <a href="/blog/first_blog">Welcome, I guess</a>
          </h3>
          {/*
            <time> with a machine-readable datetime attribute.
            This is semantically correct HTML — search engines and
            screen readers can parse the date accurately.
          */}
          <time className="entry-date" dateTime="2026-01-06">
            6 Jan 2026
          </time>
        </div>
        <p className="text-sm text-ink-light m-0">
          Late night incoherent ramblings and the occasional thing of value.
        </p>
      </article>

    </div>
  );
}
