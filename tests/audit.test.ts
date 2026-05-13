import { describe, expect, it } from "vitest";
import { generateAudit } from "../lib/audit-engine";

describe("Audit Engine", () => {

  it("calculates savings for Cursor", () => {
    const result = generateAudit("Cursor", 100);

    expect(result.savings).toBeDefined();
    expect(result.savings).toBeGreaterThanOrEqual(0);
  });

  it("calculates annual savings correctly", () => {
    const result = generateAudit("ChatGPT", 60);

    expect(result.annualSavings).toBe(result.savings * 12);
  });

  it("returns meaningful recommendation", () => {
    const result = generateAudit("Claude", 50);

    expect(result.recommendation).toBeTruthy();
    expect(result.recommendation.length).toBeGreaterThan(10);
  });

  it("returns summary text", () => {
    const result = generateAudit("Gemini", 40);

    expect(result.summary).toBeTruthy();
    expect(result.summary.length).toBeGreaterThan(20);
  });

  it("handles low spend optimized users", () => {
    const result = generateAudit("Cursor", 10);

    expect(result.savings).toBeGreaterThanOrEqual(0);
  });

});