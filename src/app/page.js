export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-12 bg-gray-200 min-h-screen shadow-lg my-10 rounded-lg border border-gray-100">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Shashwat (Shash) Singh</h1>
        <p className="text-sm text-gray-500 mt-2">
          (312) 504-0050 &nbsp;|&nbsp; Tampa, FL &nbsp;|&nbsp; <a href="mailto:ss44@usf.edu" className="text-blue-600 hover:underline">ss44@usf.edu</a> &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/shash28" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/shash28</a>
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

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 inline-block border-b-2 border-blue-600 pb-1">Education</h2>
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
           <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold">Awards:</span> USF Green and Gold Presidential Award Recipient
           </p>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 inline-block border-b-2 border-blue-600 pb-1">Technical Skills &amp; Certifications</h2>
        <div className="text-sm text-gray-700">
          <p>
            <span className="font-semibold">Tools &amp; Languages:</span> Python, Java, SQL, Javascript, Tableau, Power BI, Microsoft Excel, Microsoft PowerPoint
          </p>
          <p className="mt-1">
            <span className="font-semibold">Certifications:</span> Oracle Cloud Infrastructure Foundations, (ISC)² Certified in Cybersecurity, Excel Fundamentals, Data Visualization
          </p>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 inline-block border-b-2 border-blue-600 pb-1">Experience</h2>

        <div className="mb-5">
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-semibold text-gray-900">Self-Employed — A.I. Solutions Developer</h3>
            <span className="text-sm text-gray-500">May 2025 – Present</span>
          </div>
          <p className="text-sm text-gray-500">Tampa, FL</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Developed custom AI chat agents for small-business websites, improving response quality and increasing customer conversions.</li>
            <li>Collaborated with clients to refine conversational flows and integrations, boosting engagement while reducing manual support time.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-semibold text-gray-900">Sedgebrook — Server / Food Runner / Busser</h3>
            <span className="text-sm text-gray-500">Aug 2023 – Aug 2024</span>
          </div>
          <p className="text-sm text-gray-500">Lincolnshire, IL</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Delivered attentive meal service to elderly residents, ensuring comfort and personalized dining experiences in a senior-living community.</li>
            <li>Trained new team members on service standards and effective communication with older adults.</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 inline-block border-b-2 border-blue-600 pb-1">Leadership &amp; Involvement</h2>

        <div className="mb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-semibold text-gray-900">Delta Tau Delta Fraternity</h3>
            <span className="text-sm text-gray-500">Tampa, FL</span>
          </div>

          <p className="text-sm text-gray-700 italic mt-1">Finance Committee: Spring 2025 – Present</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
            <li>Managed a $70,000 semester budget funded through member dues, using pivot tables and VLOOKUP to track spending.</li>
            <li>Delivered financial analyses to chapter leadership, translating raw data into actionable updates for executive officers.</li>
          </ul>

          <p className="text-sm text-gray-700 italic mt-3">Academic Chair: Fall 2024 – Spring 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
            <li>Led twice-weekly academic programming sessions, creating a structured environment that strengthened chapter GPA.</li>
            <li>Set clear participation expectations and maintained accountability to sustain academic engagement.</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 inline-block border-b-2 border-blue-600 pb-1">Volunteering</h2>

        <div className="mb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-semibold text-gray-900">Chicago Lacrosse Cup</h3>
            <span className="text-sm text-gray-500">Vernon Hills, IL : Summer 2023 - Present</span>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Coordinated logistics for an annual week-long youth lacrosse tournament, the largest of its kind in Illinois.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-semibold text-gray-900">Trinity Cafe</h3>
            <span className="text-sm text-gray-500">Tampa, FL : Feb 2025 - Present</span>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Provide meal-distribution support at a Tampa food shelter serving homeless and disabled residents.</li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-gray-200 pt-4 mt-8 text-xs text-gray-400">
        <p>Interests: Weightlifting, Reading, Traveling, Volunteering</p>
      </footer>
    </main>
  );
}
