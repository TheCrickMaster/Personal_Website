export default function ResumePage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">Resume</h1>

        <a
          href="/Devdatta_Kasture_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm border border-black px-3 py-1 hover:bg-black hover:text-white transition"
        >
          Open PDF ↗
        </a>
      </div>

      <iframe
        src="/Devdatta_Kasture_Resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "1px solid black" }}
      >
        <p>
          Your browser does not support embedded PDFs.{" "}
          <a href="/Devdatta_Kasture_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Click here to view your resume.
          </a>
        </p>
      </iframe>
    </div>
  );
}