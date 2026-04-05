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

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800 mb-4">Education</h2>
        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="font-semibold text-gray-900">University of South Florida — Muma College of Business</h3>
            <span className="text-sm text-gray-500">Expected May 2028</span>
          </div>
          <p className="text-gray-700">B.S. in Business Analytics &amp; Information Systems, Cybersecurity Concentration</p>
          <p className="text-sm text-gray-600 mt-1">GPA: 3.85 / 4.00</p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Relevant Coursework:</span> System Analysis &amp; Design, Business Application Development, AI &amp; Analytics, Data Analytics for Business, Financial &amp; Managerial Accounting, Risk Management &amp; Insurance, Statistics
          </p>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">Technical Skills &amp; Certifications</h2>
        <div className="text-sm text-gray-700">
          <p>
            <span className="font-semibold">Tools &amp; Languages:</span> Python, Java, SQL, Javascript, Tableau, Power BI, Microsoft Excel, Microsoft PowerPoint
          </p>
          <p className="mt-1">
            <span className="font-semibold">Certifications:</span> Oracle Cloud Infrastructure Foundations, (ISC)² Certified in Cybersecurity, Excel Fundamentals, Data Visualization
          </p>
        </div>
      </section>

      </header>
    </main>
  );
}
