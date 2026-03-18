export default function GrottoPage() {
  return (
    <div>
      <h1 className="text-2xl mb-2">The Grotto</h1>
      <p className="text-sm italic mb-8">
        Welcome to my grotto! This page serves to curate a space for my hobbies and passions in a low stress environment.
        Here, you can explore a bit more of my personality and what I get up to in my free time.  
      </p>

      {/* ── COOKING ────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl mb-1">Cooking</h2>
        <p className="text-sm italic mb-4">
          Some of my favorite recipes.
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://www.vegrecipesofindia.com/misal-pav-recipe-misal-pav/"
              target="_blank"
              rel="noopener noreferrer"
            >
              A fantastic recipe for Mishal Pav
            </a>
            <p className="text-sm mt-1">
              This is one of my favorite recipes for Mishal Pav, a spicy bread and lentil dish from Maharashtra. 
              Typically, I like the potatoes to have some crunch to them, so I usually pan fry them and add them a bit later in the process.  
            </p>
          </li>
          <li className="mb-4">
            <a
              href="https://www.youtube.com/@Jose.elCook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jose el Cook on YouTube
            </a>
            <p className="text-sm mt-1">
              I discovered Jose from his recipe on elotes. He is my go to for any Latin American cusine I want to make. 
              He's also a pretty funny guy.
            </p>
          </li>
        </ul>
      </section>

      <hr />

      {/* ── CROCHET ────────────────────────────────────────────── */}
      <section className="mb-10 mt-8">
        <h2 className="text-xl mb-1">Crochet</h2>
        <p className="text-sm italic mb-4">
          Patterns and trinkets I like
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://youtu.be/QVsU-auI5O8?si=flaUe_IPqACdtRB7"
              target="_blank"
              rel="noopener noreferrer"
            >
              A nice beanie hat
            </a>
            <p className="text-sm mt-1">
              I like the pattern of this beanie because it uses simple double crochet stitches,
              so both beginners and experienced crocheters can make it. One piece of advice is to not do too
              many increases at the top so you do not chinch too tight. 
            </p>
          </li>
          <li className="mb-4">
            <a
              href="https://kristitullus.com/blogs/news/free-pattern-tiny-teddy-bear"
              target="_blank"
              rel="noopener noreferrer"
            >
              Small teddy bear pattern
            </a>
            <p className="text-sm mt-1">
              I think this would be a nice gift for a baby shower. 
            </p>
          </li>
        </ul>
      </section>

      <hr />

      {/* ── FASHION ────────────────────────────────────────────── */}
      <section className="mb-10 mt-8">
        <h2 className="text-xl mb-1">Fashion</h2>
        <p className="text-sm italic mb-4">
          Everything Fashion
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://tfnuiuc.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Fashion Network Substack
            </a>
            <p className="text-sm mt-1">
              The Fashion Network is a student club at the University at Illinois that explores current fashion trends,
              social commentary on the broader fashion industry, and fashion in popular culture. You can find my blogs on the Substack, as well as the weekly newsletter
              that you can subscribe to. 
              
            </p>
          </li>
        </ul>
      </section>

      <hr />

      {/* ── VIDEO & PHOTOGRAPHY ────────────────────────────────── */}
      <section className="mb-10 mt-8">
        <h2 className="text-xl mb-1">Video &amp; Photography</h2>
        <p className="text-sm italic mb-4">
          Creators, gear, and editing resources.
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li className="mb-4">
            <a
              href="https://www.youtube.com/@michaelmackelvie/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
            Michael Mackelvie on YouTube
            </a>
            <p className="text-sm mt-1">
            In my opinion, Michael is the best YouTuber for sports commentary and deep dives into the pschology of athletes.
            He is objective in his analysis (hard to find these days) and his commentary style engages the viewer in a way that is easy to digest.
            He makes complex topics in sports easy to understand. As a numbers guy, I like his statistical analysis and his visualizations are top notch.
            Check him out if you like sports and want to learn more about the mental game of athletes. 
            </p>
          </li>
        </ul>

        {/* YouTube placeholder */}
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