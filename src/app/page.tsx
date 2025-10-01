import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find the right disaster relief—fast.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Bridge to Relief matches you to verified aid in your county—in minutes.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#demo" className="rounded-lg px-5 py-3 bg-black text-white">
            Try the demo chat
          </a>
          <a href="#join" className="rounded-lg px-5 py-3 border">
            Join the pilot
          </a>
        </div>
      </section>

      {/* Value props */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["Local & verified", "We curate programs by county with reliable sources."],
            ["Simple steps", "Tell us your needs; we show eligibility & next actions."],
            ["Human handoff", "When in doubt, we guide you to people who can help."]
          ].map(([title, body]) => (
            <div key={title} className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chat demo */}
      <section id="demo" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">Live demo (prototype)</h2>
        <p className="mt-2 text-gray-700">
          Don&apos;t share sensitive info. This demo may make mistakes.
        </p>
        <div className="mt-6">
          <ChatPanel />
        </div>
      </section>

      {/* CTAs */}
      <section id="join" className="px-6 py-16 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold">Join the pilot</h2>
          <form className="mt-4 grid gap-3" method="POST" action="/api/lead">
            <input name="email" required placeholder="Email" className="border rounded-lg px-4 py-3" />
            <select name="role" className="border rounded-lg px-4 py-3">
              <option>Individual</option>
              <option>Partner organization</option>
              <option>Funder</option>
            </select>
            <button className="rounded-lg px-5 py-3 bg-black text-white" type="submit">
              Join waitlist
            </button>
            <p className="text-xs text-gray-500">
              We store only what&apos;s needed. Do not include SSN, bank, or medical details.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-sm text-gray-600">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4">
          <span>© {new Date().getFullYear()} Bridge to Relief (nonprofit in formation)</span>
          <a className="underline" href="/privacy">Privacy</a>
          <a className="underline" href="/terms">Terms</a>
          <a className="underline" href="mailto:hello@yourdomain.org">Contact</a>
        </div>
      </footer>
    </main>
  );
}
