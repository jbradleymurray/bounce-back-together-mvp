"use client";
import { useState } from "react";
type Msg = { role: "user" | "assistant"; content: string };

export default function ChatPanel() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const next: Msg[] = [...messages, { role: "user" as const, content: input }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next })
      });
      if (!res.ok) throw new Error("Bad response");
      const data = await res.json();
      setMessages([...next, { role: "assistant" as const, content: data.reply }]);
    } catch {
      setMessages([...next, { role: "assistant" as const, content: "Sorry—something went wrong." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl border rounded-xl p-4">
      <div className="h-72 overflow-y-auto space-y-3">
        {messages.length === 0 && (
          <div className="text-sm text-gray-600">
            Tell me your ZIP code and needs (e.g., &quot;33901, lost power and need food assistance&quot;).
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : ""}>
            <div className={`inline-block px-3 py-2 rounded-lg ${m.role === "user" ? "bg-black text-white" : "bg-gray-100"}`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500">Thinking…</div>}
      </div>
      <form onSubmit={onSend} className="mt-3 flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Type a message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="rounded-lg px-4 py-2 bg-black text-white" disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
}
