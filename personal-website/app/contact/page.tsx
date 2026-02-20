export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl mb-6">Contact</h1>
      
      <p className="mb-6 leading-relaxed">
        Feel free to reach out to me through any of the following channels:
      </p>
      
      <div className="space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:your.email@example.com">
            your.email@example.com
          </a>
        </p>
        {/* Other links */}
      </div>
    </div>
  );
}