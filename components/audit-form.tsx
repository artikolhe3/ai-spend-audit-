"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/audit";

export default function AuditForm() {
  const [tool, setTool] = useState("Cursor");
  const [spend, setSpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");

    if (savedData) {
      const parsed = JSON.parse(savedData);

      setTool(parsed.tool || "Cursor");
      setSpend(parsed.spend || "");
      setTeamSize(parsed.teamSize || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "audit-form",
      JSON.stringify({
        tool,
        spend,
        teamSize,
      })
    );
  }, [tool, spend, teamSize]);

  const handleAudit = () => {
    if (!spend) return;

    const audit = generateAudit(tool, Number(spend));

    setResult(audit);
  };

  const handleEmailSubmit = () => {
    if (!email) return;

    setSubmitted(true);
  };

  return (
    <div className="mt-16 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

      <h2 className="mb-2 text-3xl font-bold">
        Start Your AI Spend Audit
      </h2>

      <p className="mb-8 text-white/60">
        Analyze your AI tooling costs and discover optimization opportunities instantly.
      </p>

      <div className="space-y-4">

        <div>
          <label className="mb-2 block text-sm text-white/70">
            AI Tool
          </label>

          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black p-3 text-white outline-none transition focus:border-white/30"
          >
            <option>Cursor</option>
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>GitHub Copilot</option>
            <option>Gemini</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            placeholder="200"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black p-3 text-white outline-none transition focus:border-white/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">
            Team Size
          </label>

          <input
            type="number"
            placeholder="5"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black p-3 text-white outline-none transition focus:border-white/30"
          />
        </div>

        <button
          onClick={handleAudit}
          className="w-full rounded-xl bg-white p-3 font-semibold text-black transition hover:scale-[1.01] hover:bg-white/90"
        >
          Generate Audit
        </button>

      </div>

      {result && (
        <div className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-left">

          <div className="flex flex-col gap-2">

            <h3 className="text-3xl font-bold text-green-400">
              Save ${result.savings}/month
            </h3>

            <p className="text-lg text-green-300">
              Annual Savings: ${result.annualSavings}
            </p>

          </div>

          <p className="mt-5 leading-7 text-white/80">
            {result.recommendation}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-black/40 p-5">
              <p className="text-sm text-white/50">
                Current Spend
              </p>

              <p className="mt-2 text-2xl font-bold">
                ${result.currentSpend}
              </p>
            </div>

            <div className="rounded-xl bg-black/40 p-5">
              <p className="text-sm text-white/50">
                Optimized Spend
              </p>

              <p className="mt-2 text-2xl font-bold">
                ${result.optimizedSpend}
              </p>
            </div>

          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-5">

            <p className="mb-3 text-sm uppercase tracking-widest text-white/40">
              AI Generated Summary
            </p>

            <p className="leading-7 text-white/80">
              {result.summary}
            </p>

          </div>

          {result.savings > 500 && (
            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">

              <h4 className="text-lg font-semibold text-blue-300">
                High Savings Opportunity Detected
              </h4>

              <p className="mt-2 text-white/70">
                Your organization may qualify for discounted AI infrastructure credits through Credex.
              </p>

              <button className="mt-4 rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-400">
                Book Credex Consultation
              </button>

            </div>
          )}

          <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-5">

            <h4 className="text-lg font-semibold">
              Get Full Audit Report
            </h4>

            <p className="mt-2 text-sm text-white/60">
              Receive your personalized audit report and future optimization updates.
            </p>

            {!submitted ? (
              <div className="mt-5 flex flex-col gap-3 md:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
                />

                <button
                  onClick={handleEmailSubmit}
                  className="rounded-xl bg-white px-6 py-3 font-medium text-black hover:bg-white/90"
                >
                  Send Report
                </button>

              </div>
            ) : (
              <div className="mt-5 rounded-lg border border-green-500/20 bg-green-500/10 p-4">

                <p className="text-green-300">
                  Audit report request submitted successfully.
                </p>

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

