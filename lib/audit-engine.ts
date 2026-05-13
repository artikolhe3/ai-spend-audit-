import { AuditResult } from "@/types/audit";

export function generateAudit(
  tool: string,
  spend: number
): AuditResult {

  let recommendation = "";
  let optimizedSpend = spend;

  if (tool === "Cursor") {
    if (spend > 40) {
      recommendation =
        "Your current Cursor setup appears oversized for your likely usage. Cursor Pro can significantly reduce monthly cost for smaller engineering teams.";
      optimizedSpend = 20;
    }
  }

  else if (tool === "ChatGPT") {
    if (spend > 30) {
      recommendation =
        "You may be paying enterprise pricing without requiring advanced governance controls. ChatGPT Team likely fits your current workflow.";
      optimizedSpend = 30;
    }
  }

  else if (tool === "Claude") {
    if (spend > 20) {
      recommendation =
        "Claude Pro may provide sufficient capabilities without the overhead of higher enterprise plans.";
      optimizedSpend = 20;
    }
  }

  else if (tool === "GitHub Copilot") {
    if (spend > 19) {
      recommendation =
        "GitHub Copilot Individual may be more cost efficient unless centralized admin controls are required.";
      optimizedSpend = 10;
    }
  }

  else if (tool === "Gemini") {
    if (spend > 25) {
      recommendation =
        "Gemini Pro likely covers your workload while reducing unnecessary infrastructure costs.";
      optimizedSpend = 25;
    }
  }

  // fallback
  if (!recommendation) {
    recommendation =
      "Your current AI tooling stack appears reasonably optimized with no major cost inefficiencies detected.";
    optimizedSpend = spend;
  }

  const savings = Math.max(0, spend - optimizedSpend);

  return {
    currentSpend: spend,
    optimizedSpend,
    savings,
    annualSavings: savings * 12,

    recommendation,

    summary: `We analyzed your ${tool} spending profile and identified approximately $${savings} in potential monthly savings opportunities. Your current configuration may include unnecessary enterprise-tier pricing relative to your likely operational needs. Optimizing your AI tooling stack could reduce annual costs while preserving productivity and workflow quality.`,
  };
}