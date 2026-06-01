export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          HR Compliance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Verify Job Postings Meet<br />
          <span className="text-[#58a6ff]">Salary Transparency Laws</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste any job description and get an instant compliance report. Catch missing salary ranges before regulators do — built for HR teams and recruiting agencies.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Checking — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ Instant results</span>
          <span>✓ 20+ state rules</span>
          <span>✓ Bulk checking</span>
          <span>✓ No setup required</span>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Paste Job Posting', desc: 'Drop in any job description text from any source.' },
            { step: '2', title: 'Select State', desc: 'Choose the applicable state transparency law to check against.' },
            { step: '3', title: 'Get Report', desc: 'Receive a detailed compliance report with flagged issues and fixes.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center mb-3 text-sm">{step}</div>
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited single job checks',
              'Bulk upload up to 500 postings',
              '20+ state salary transparency rules',
              'Exportable compliance reports',
              'Email alerts for law updates',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which states are covered?',
              a: 'We cover all states with active salary transparency laws including California, Colorado, New York, Washington, Illinois, and more — updated as new laws take effect.'
            },
            {
              q: 'How accurate is the compliance check?',
              a: 'Our engine uses state-specific regex patterns and rule sets maintained by HR compliance experts. It catches missing salary ranges, pay scale omissions, and required disclosure language.'
            },
            {
              q: 'Can I check postings in bulk?',
              a: 'Yes. Pro subscribers can upload a CSV of up to 500 job postings at once and download a full compliance report for the entire batch.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-[#484f58] border-t border-[#21262d]">
        © {new Date().getFullYear()} Salary Transparency Checker. Built for HR compliance teams.
      </footer>
    </main>
  )
}
