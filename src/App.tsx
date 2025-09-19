function App() {
  const services = [
    {
      title: "AI Consulting & Strategy",
      points: [
        "AI adoption roadmaps and maturity assessments.",
        "Use-case identification and ROI calculation.",
        "Responsible AI frameworks and governance.",
        "KPI-driven success planning.",
      ],
    },
    {
      title: "Custom AI Solutions",
      points: [
        "Generative AI assistants, copilots, and content systems.",
        "NLP for chatbots, knowledge mining, and intelligent search.",
        "Computer Vision for quality control and document analysis.",
        "Predictive Analytics for forecasting and optimization.",
      ],
    },
    {
      title: "RPA & Hyperautomation",
      points: [
        "Automate repetitive business processes with bots.",
        "Intelligent document processing (OCR + NLP).",
        "Workflow orchestration across ERP/CRM/legacy systems.",
        "AI-enhanced RPA (decision-making, predictive actions).",
      ],
    },
    {
      title: "Test Automation & Quality Engineering",
      points: [
        "AI-assisted test case generation.",
        "Self-healing test suites that adapt to UI changes.",
        "Regression optimization with risk-based selection.",
        "Integration into CI/CD pipelines for faster releases.",
      ],
    },
    {
      title: "Data Engineering & Integration",
      points: [
        "Data pipelines and ETL with governance.",
        "Secure data management and compliance (GDPR).",
        "MLOps pipelines for model deployment and monitoring.",
        "Integration with enterprise systems.",
      ],
    },
    {
      title: "AI Governance & Security",
      points: [
        "AI model audit (bias, explainability, transparency).",
        "Secure AI deployment and access control.",
        "Ethical AI guidelines and compliance monitoring.",
        "Risk management for mission-critical systems.",
      ],
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans antialiased">
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Header Section */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            SECURNET AI GmbH
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-400">
            Secure AI. Tested Automation. Real Results.
          </p>
          <p className="mt-6 text-base text-slate-400">
            SECURNET AI GmbH is a technology consultancy specializing in
            Artificial Intelligence (AI), Robotic Process Automation (RPA), and
            Test Automation. We help organizations design, build, and validate
            automation systems that are secure, reliable, and outcome-driven.
          </p>
        </header>

        {/* Services Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 shadow-lg hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-slate-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
