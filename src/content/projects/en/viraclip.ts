import type { ProjectContent } from "../../types";

export default {
  title: "ViraClip",
  theme: "dark",
  tags: ["node", "kubernetes", "postgresql", "websockets"],
  description:
    "ViraClip is an AI-powered video generation platform that automates the full pipeline from script to published short-form content.<br/><br/>Built on a Dockerized microservices architecture, it uses GPU acceleration and integrates multiple LLM providers for intelligent script generation and voice synthesis.",
  source: "https://github.com/sebsv123",
} as const satisfies ProjectContent;
