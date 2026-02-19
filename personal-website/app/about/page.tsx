
export default function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl mb-6">About</h1>
      
      <p className="italic mb-6">&quot;Your personal quote or motto here.&quot;</p>
      
      <p className="mb-4 leading-relaxed">
        Hi!
      </p>
      
      <p className="mb-4 leading-relaxed">
        I am a [your profession/role]. I&apos;m passionate about [your interests].
      </p>
      
      <p className="mb-4 leading-relaxed">
        [Add more about yourself - where you&apos;re from, what you do, what drives you.]
      </p>
      
      <p className="mb-4 leading-relaxed">
        My interests, besides technology, include [list your other interests].
      </p>
      
      <hr className="my-8 border-black" />
      
      <h1 className="text-2xl mb-6">Resume</h1>
      
      <h2 className="text-xl mb-4">Education</h2>
      
      <p className="mb-4">
        <strong>Your Degree</strong> <em>(Major), Year — University Name</em>
      </p>
      
      <h2 className="text-xl mb-4 mt-6">Skills</h2>
      
      <p className="mb-2"><strong>Languages:</strong></p>
      <p className="mb-4">
        Python, JavaScript, TypeScript, Java, C++, SQL
      </p>
      
      <p className="mb-2"><strong>Frameworks:</strong></p>
      <p className="mb-4">
        React, Next.js, Node.js, Django, Flask, Express
      </p>
      
      <p className="mb-2"><strong>Technologies:</strong></p>
      <p className="mb-4">
        Git, Docker, PostgreSQL, MongoDB, Redis, AWS
      </p>
      
      <p className="mb-2"><strong>Tools:</strong></p>
      <p className="mb-4">
        VS Code, Vim, Linux, Figma
      </p>
      
      <h2 className="text-xl mb-4 mt-6">Experience</h2>
      
      <p className="mb-2">
        <strong>Your Job Title</strong> <em>, Company Name — Month Year - Present</em>
      </p>
      <p className="mb-6 leading-relaxed">
        Description of your role, responsibilities, and achievements. Mention the 
        technologies you work with, problems you&apos;ve solved, and the impact of your work.
        Be specific about projects you&apos;ve led or contributed to significantly.
      </p>
      
      <p className="mb-2">
        <strong>Previous Job Title</strong> <em>, Previous Company — Month Year - Month Year</em>
      </p>
      <p className="mb-6 leading-relaxed">
        Description of your previous role. Highlight key accomplishments and skills 
        you developed. Mention any technologies or methodologies you learned.
      </p>
      
      <h2 className="text-xl mb-4 mt-6">Other Projects</h2>
      
      <p className="mb-2 italic">
        Project Name One (Purpose or context)
      </p>
      <p className="mb-6 leading-relaxed">
        Brief description of the project, the technologies you used, and what you 
        learned or accomplished. Mention any interesting challenges you overcame.
      </p>
      
      <p className="mb-2 italic">
        Project Name Two (Purpose or context)
      </p>
      <p className="mb-6 leading-relaxed">
        Another project description. Focus on the problem you were solving and 
        the approach you took.
      </p>
      
      <h2 className="text-xl mb-4 mt-6">Honors & Awards</h2>
      
      <ul className="mb-6 list-disc list-inside">
        <li className="mb-2">Award or recognition you received, Year</li>
        <li className="mb-2">Another achievement or honor, Year</li>
        <li className="mb-2">Academic or professional recognition, Year</li>
      </ul>
    </div>
  );
}