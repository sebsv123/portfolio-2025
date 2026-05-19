import type { ProjectContent } from "../../types";

export default {
  title: "GenMail",
  theme: "light",
  tags: ["node", "postgresql", "redis"],
  description:
    "GenMail is an email automation system powered by AI agents that drafts, personalizes and sends outreach campaigns at scale.<br/><br/>It uses LLM routing to select the best model per task, integrates with multiple email providers, and includes a self-healing orchestration layer that retries and adapts automatically.",
  source: "https://github.com/sebsv123",
} as const satisfies ProjectContent;
