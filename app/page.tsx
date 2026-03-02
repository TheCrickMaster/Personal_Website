/**
 * HOME PAGE — app/page.tsx
 * ========================
 */
export default function Home() {
  return (
    <div>
      {/*
        Opening quote
      */}
      <blockquote>
        &ldquo;For those who have conquered the mind, it is their friend. For those who have failed to do so, the mind works like an enemy.&rdquo;
        <cite>Bhagavad Gita 6:6</cite>
      </blockquote>

      {/*
        Page heading
      */}
      <h1 className="italic mb-6">Welcome.</h1>

      {/*
      */}
      <p className="intro">
        My name is Devdatta, and this is my corner of the web. On this site, you will find a collection of my current projects, writings, hobbies, and other things I find interesting.
        I hope my perspectives help to uniquely inform your own, and that you find something here that resonates with you.  
      </p>


      <hr />

      {/*
        Recent posts preview — hand-coded for the home page.
      */}
      <h2 className="mb-4 pb-2 border-b border-rule">Recent Writing</h2>

      <article className="entry">
        <div className="entry-header">
          <h3>
            <a href="/blog/first_blog">Welcome, I guess</a>
          </h3>
          {/*
            <time> with a machine-readable datetime attribute.
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
