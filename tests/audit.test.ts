import { describe, expect, it } from "vitest";
import { generateAudit } from "@/lib/audit";

describe("Audit Engine", () => {

  it("calculates savings for Cursor", () => {
    const result = generateAudit("Cursor", 100);

    expect(result.savings).toBeGreaterThan(0);
  });

  it("calculates annual savings", () => {
    const result = generateAudit("ChatGPT", 60);

    expect(result.annualSavings).toBe(result.savings * 12);
  });

  it("returns recommendation", () => {
    const result = generateAudit("Claude", 50);

    expect(result.recommendation.length).toBeGreaterThan(10);
  });

  it("returns summary", () => {
    const result = generateAudit("Gemini", 40);

    expect(result.summary.length).toBeGreaterThan(20);
  });

  it("handles optimized users", () => {
    const result = generateAudit("Cursor", 10);

    expect(result.savings).toBeGreaterThanOrEqual(0);
  });

});