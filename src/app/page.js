export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-white min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Shashwat (Shash) Singh</h1>
        <p className="text-sm text-gray-500 mt-2 flex flex-wrap gap-x-3">
          <span>(312) 504-0050</span>
          <span>Tampa, FL</span>
          <a href="mailto:ss44@usf.edu" className="text-blue-600 hover:underline">ss44@usf.edu</a>
          <a href="https://www.linkedin.com/in/shash28" className="text-blue-600 hover:underline">linkedin.com/in/shash28</a>
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Business Analytics &amp; Information Systems student at the University of South Florida
          with a cybersecurity concentration and a strong foundation in data visualization,
          Python, and SQL. Passionate about turning raw data into clear, actionable insights
          and building AI-driven solutions that help businesses work smarter. Currently seeking
          opportunities to apply analytical and technical skills in a fast-paced,
          results-oriented environment.
        </p>
      </header>
    </main>
  );
}