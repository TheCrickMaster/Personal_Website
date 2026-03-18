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
        My name is Devdatta, and this is my corner of the web. On this site, you will find a collection of my current projects, writings, hobbies, and other things of interest.
        Hopfully, my perspectives help to uniquely inform your own, and that you find something here that resonates.  
      </p>


      <hr />

    </div>
  );
}
